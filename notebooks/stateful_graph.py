# Copyright (c) AIRBUS and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

from __future__ import annotations
from typing import Any, Dict, List, Iterable, Optional, Union, Tuple
from skdecide import Memory, Space, Value, EnumerableSpace, SamplableSpace, T, ImplicitSpace, Distribution
import random
from skdecide.builders.domain import DeterministicTransitions, Actions, Goals, Markovian, \
    FullyObservable, PositiveCosts, UncertainTransitions
from skdecide import Domain, DeterministicPlanningDomain #, D
import networkx as nx


class ActionSpace(EnumerableSpace, SamplableSpace):
    def sample(self) -> T:
        return random.choice(self.l)

    def contains(self, x: T) -> bool:
        pass

    def __init__(self, l: List[object]):
        self.l = l

    def get_elements(self) -> Iterable[object]:
        return self.l

    def values(self):
        return self.l


class GraphState:
    def __init__(self, id):
        self.id = id

    def __hash__(self):
        return self.id

    def __eq__(self, other):
        return self.id == other.id

class D(DeterministicPlanningDomain):
    T_state = GraphState
    T_observation = T_state  # Type of observations
    T_event = int  # Type of events
    T_value = float  # Type of transition values (rewards or costs)
    T_predicate = bool  # Type of logical checks
    T_info = None  # Type of additional information given as part of an environment outcome


class GraphDomainStateful(D):

    def __init__(self,
                 next_state_map,
                 next_state_attributes,
                 targets=None,
                 attribute_weight="weight"):
        self.next_state_map = next_state_map  # State, action, -> next state
        self.next_state_attributes = next_state_attributes
        if targets is None:
            self.targets = set()
        else:
            self.targets = set(targets)
        self.attribute_weight = attribute_weight

    def _get_next_state(self, memory: D.T_memory[D.T_state], event: D.T_event) -> D.T_state:
        return GraphState(id=self.next_state_map[memory.id][event])

    def _get_transition_value(self, memory: D.T_memory[D.T_state],
                              event: D.T_event,
                              next_state: Optional[D.T_state] = None) \
            -> Value[D.T_value]:
        return Value(cost=self.next_state_attributes[memory.id][event][self.attribute_weight])

    def is_terminal(self, state: D.T_state) -> bool:
        return state.id in self.targets

    def _get_action_space_(self) -> Space[D.T_event]:
        return ImplicitSpace(lambda x: True)

    def _get_applicable_actions_from(self, memory: D.T_memory[D.T_state]) -> Space[D.T_event]:
        return ActionSpace(list(self.next_state_map[memory.id].keys()))

    def _get_goals_(self) -> Space[D.T_observation]:
        return ImplicitSpace(lambda x: (x.id in self.targets))

    def is_goal(self, state: D.T_state) -> bool:
        return state.id in self.targets

    def _get_observation_space_(self) -> Space[D.T_observation]:
        pass

    def set_sources_targets(self, sources, targets):
        """
        Change the sources and targets attribute.
        """
        self.sources = sources
        self.targets = targets

    def set_nodes_target(self, targets):
        """
        Change the sources and targets attribute.
        """
        self.targets = targets
