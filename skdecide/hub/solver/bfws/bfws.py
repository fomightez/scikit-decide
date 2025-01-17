# Copyright (c) AIRBUS and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

from __future__ import annotations

import os
import sys
from typing import Any, Callable

from skdecide import Domain, Solver, hub
from skdecide.builders.domain import (
    Actions,
    DeterministicInitialized,
    DeterministicTransitions,
    FullyObservable,
    Markovian,
    Rewards,
    Sequential,
    SingleAgent,
)
from skdecide.builders.solver import DeterministicPolicies, ParallelSolver, Utilities
from skdecide.core import Value

record_sys_path = sys.path
skdecide_cpp_extension_lib_path = os.path.abspath(hub.__path__[0])
if skdecide_cpp_extension_lib_path not in sys.path:
    sys.path.append(skdecide_cpp_extension_lib_path)

try:

    from __skdecide_hub_cpp import _BFWSSolver_ as bfws_solver

    class D(
        Domain,
        SingleAgent,
        Sequential,
        DeterministicTransitions,
        Actions,
        DeterministicInitialized,
        Markovian,
        FullyObservable,
        Rewards,
    ):  # TODO: check why DeterministicInitialized & PositiveCosts/Rewards?
        pass

    class BFWS(ParallelSolver, Solver, DeterministicPolicies, Utilities):
        T_domain = D

        def __init__(
            self,
            domain_factory: Callable[[], Domain],
            state_features: Callable[[Domain, D.T_state], Any],
            heuristic: Callable[[Domain, D.T_state], D.T_agent[Value[D.T_value]]],
            termination_checker: Callable[
                [Domain, D.T_state], D.T_agent[D.T_predicate]
            ],
            parallel: bool = False,
            shared_memory_proxy=None,
            debug_logs: bool = False,
        ) -> None:
            ParallelSolver.__init__(
                self,
                domain_factory=domain_factory,
                parallel=parallel,
                shared_memory_proxy=shared_memory_proxy,
            )
            self._solver = None
            self._domain = None
            self._state_features = state_features
            self._termination_checker = termination_checker
            self._debug_logs = debug_logs
            if heuristic is None:
                self._heuristic = lambda d, s: Value(cost=0)
            else:
                self._heuristic = heuristic
            self._lambdas = [
                self._state_features,
                self._heuristic,
                self._termination_checker,
            ]
            self._ipc_notify = True

        def close(self):
            """Joins the parallel domains' processes.
            Not calling this method (or not using the 'with' context statement)
            results in the solver forever waiting for the domain processes to exit.
            """
            if self._parallel:
                self._solver.close()
            ParallelSolver.close(self)

        def _init_solve(self, domain_factory: Callable[[], D]) -> None:
            self._domain_factory = domain_factory
            self._solver = bfws_solver(
                domain=self.get_domain(),
                state_features=lambda d, s: self._state_features(d, s)
                if not self._parallel
                else d.call(None, 0, s),
                heuristic=lambda d, s: self._heuristic(d, s)
                if not self._parallel
                else d.call(None, 1, s),
                termination_checker=lambda d, s: self._termination_checker(d, s)
                if not self._parallel
                else d.call(None, 2, s),
                parallel=self._parallel,
                debug_logs=self._debug_logs,
            )
            self._solver.clear()

        def _solve_domain(self, domain_factory: Callable[[], D]) -> None:
            self._init_solve(domain_factory)

        def _solve_from(self, memory: D.T_memory[D.T_state]) -> None:
            self._solver.solve(memory)

        def _is_solution_defined_for(
            self, observation: D.T_agent[D.T_observation]
        ) -> bool:
            return self._solver.is_solution_defined_for(observation)

        def _get_next_action(
            self, observation: D.T_agent[D.T_observation]
        ) -> D.T_agent[D.T_concurrency[D.T_event]]:
            if not self._is_solution_defined_for(observation):
                self._solve_from(observation)
            return self._solver.get_next_action(observation)

        def _get_utility(self, observation: D.T_agent[D.T_observation]) -> D.T_value:
            return self._solver.get_utility(observation)


except ImportError:
    sys.path = record_sys_path
    print(
        'Scikit-decide C++ hub library not found. Please check it is installed in "skdecide/hub".'
    )
    raise
