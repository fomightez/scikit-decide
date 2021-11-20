(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{592:function(t,e,a){"use strict";a.r(e);var s=a(38),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[t._v("#")]),t._v(" Guide")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")]),a("ul",[a("li",[a("a",{attrs:{href:"#as-a-domain-developer"}},[t._v("As a domain developer")])]),a("li",[a("a",{attrs:{href:"#as-a-solver-developer"}},[t._v("As a solver developer")])])])]),a("li",[a("a",{attrs:{href:"#installation"}},[t._v("Installation")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-make-sure-to-have-a-python-3-7-environment"}},[t._v("1. Make sure to have a Python 3.7+ environment")])]),a("li",[a("a",{attrs:{href:"#_2-install-scikit-decide-library"}},[t._v("2. Install scikit-decide library")])])])]),a("li",[a("a",{attrs:{href:"#getting-started"}},[t._v("Getting started")])]),a("li",[a("a",{attrs:{href:"#how-to"}},[t._v("How to")]),a("ul",[a("li",[a("a",{attrs:{href:"#select-a-domain-to-solve"}},[t._v("Select a domain to solve")])]),a("li",[a("a",{attrs:{href:"#find-compatible-solvers"}},[t._v("Find compatible solvers")])]),a("li",[a("a",{attrs:{href:"#compute-a-solution"}},[t._v("Compute a solution")])]),a("li",[a("a",{attrs:{href:"#test-the-solution"}},[t._v("Test the solution")])])])]),a("li",[a("a",{attrs:{href:"#examples"}},[t._v("Examples")]),a("ul",[a("li",[a("a",{attrs:{href:"#playground"}},[t._v("Playground")])])])]),a("li",[a("a",{attrs:{href:"#code-generators"}},[t._v("Code generators")])]),a("li",[a("a",{attrs:{href:"#roadmap"}},[t._v("Roadmap")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Scikit-decide is an AI framework for Reinforcement Learning, Automated Planning and Scheduling.")]),t._v(" "),a("p",[t._v("It is meant for being a one-stop shop solution to formalize decision-making problems, finding compatible solvers among a growing catalog and get the best solution possible. The catalog is a combination of wrapped existing domains/solvers and newly contributed ones.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/architecture.png"),alt:"Architecture"}}),t._v(" "),a("h3",{attrs:{id:"as-a-domain-developer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-a-domain-developer"}},[t._v("#")]),t._v(" As a domain developer")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Scikit-decide supports formalizing the problem one characteristic at a time without the need of being an algorithmic expert nor knowing in advance the best kind of solver for this task (RL, planning, scheduling or any hybrid type).")])]),t._v(" "),a("h3",{attrs:{id:"as-a-solver-developer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-a-solver-developer"}},[t._v("#")]),t._v(" As a solver developer")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Scikit-decide provides a meaningful API to interact with domains at the expected level of information, as well as a catalog of domains/solvers to test/benchmark new algorithms.")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h3",{attrs:{id:"_1-make-sure-to-have-a-python-3-7-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-make-sure-to-have-a-python-3-7-environment"}},[t._v("#")]),t._v(" 1. Make sure to have a Python 3.7+ environment")]),t._v(" "),a("p",[t._v("The use of a virtual environment for scikit-decide is recommended, and you will need to ensure the environment use a Python version greater than 3.7.\nThis can be achieved either by using "),a("a",{attrs:{href:"https://docs.conda.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("conda"),a("OutboundLink")],1),t._v(" or by using "),a("a",{attrs:{href:"https://github.com/pyenv/pyenv",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyenv"),a("OutboundLink")],1),t._v(" (or "),a("a",{attrs:{href:"https://github.com/pyenv-win/pyenv-win",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyenv-win"),a("OutboundLink")],1),t._v(" on windows)\nand "),a("a",{attrs:{href:"https://docs.python.org/fr/3/library/venv.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("venv"),a("OutboundLink")],1),t._v(" module.")]),t._v(" "),a("p",[t._v("The following examples show how to create a virtual environment with Python version 3.8.11 with the mentioned methods.")]),t._v(" "),a("h4",{attrs:{id:"with-conda-all-platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-conda-all-platforms"}},[t._v("#")]),t._v(" With conda (all platforms)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("conda create -n skdecide "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("python")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),t._v(".11\nconda activate skdecide\n")])])]),a("h4",{attrs:{id:"with-pyenv-venv-linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-pyenv-venv-linux-macos"}},[t._v("#")]),t._v(" With pyenv + venv (Linux/MacOS)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pyenv "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),t._v(".11\npyenv shell "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),t._v(".11\npython -m venv skdecide-venv\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" skdecide-venv\n")])])]),a("h4",{attrs:{id:"with-pyenv-win-venv-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-pyenv-win-venv-windows"}},[t._v("#")]),t._v(" With pyenv-win + venv (Windows)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pyenv "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),t._v(".11\npyenv shell "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),t._v(".11\npython -m venv skdecide-venv\nskdecide-venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("activate\n")])])]),a("h3",{attrs:{id:"_2-install-scikit-decide-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-scikit-decide-library"}},[t._v("#")]),t._v(" 2. Install scikit-decide library")]),t._v(" "),a("h4",{attrs:{id:"full-install-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-install-recommended"}},[t._v("#")]),t._v(" Full install [Recommended]")]),t._v(" "),a("p",[t._v("Install scikit-decide library from PyPI with all dependencies required by domains/solvers in the hub (scikit-decide catalog).")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U pip\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U scikit-decide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h4",{attrs:{id:"minimal-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimal-install"}},[t._v("#")]),t._v(" Minimal install")]),t._v(" "),a("p",[t._v("Alternatively you can choose to only install the core library, which is enough if you intend to create your own domain and solver.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U pip\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U scikit-decide\n")])])]),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("p",[t._v("Domain characteristics are one of the key concepts in scikit-decide: they are combined on the one hand to define domains, on the other hand to specify the envelope of domains a solver can tackle.")]),t._v(" "),a("p",[t._v("Each characteristic has various levels, from general (high-level) to specialized (low-level) ones, each level inheriting higher-level functions. Any domain fully contained in a solver's envelope is compatible with this solver, unless it violates additional requirements (optional).")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/characteristics.png"),alt:"Characteristics"}}),t._v(" "),a("p",[t._v("Defining a domain to solve is a matter of:")]),t._v(" "),a("ul",[a("li",[t._v("selecting a base domain class ("),a("code",[t._v("Domain")]),t._v(" by default or any pre-made template for typical combinations like "),a("code",[t._v("DeterministicPlanningDomain")]),t._v(")")]),t._v(" "),a("li",[t._v("fine-tuning any necessary characteristic level with something more specialized (lower-level)")]),t._v(" "),a("li",[t._v("auto-generating the code skeleton from the combination above (technically by implementing all abstract methods)")]),t._v(" "),a("li",[t._v("filling the code as needed based on domain expertise")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("When starting a new domain or solver, it is highly recommended to check the "),a("a",{attrs:{href:"#code-generators"}},[t._v("code generators")]),t._v(" for assistance and auto-generation of the skeleton to fill.")])]),t._v(" "),a("p",[t._v("Check "),a("a",{attrs:{href:"#how-to"}},[t._v("How to")]),t._v(" to see how to find compatible solvers and compute a solution, once a domain is defined.")]),t._v(" "),a("h2",{attrs:{id:"how-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to"}},[t._v("#")]),t._v(" How to")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Exact prints and outputs may vary depending on which domains/solvers are registered on your system.")])]),t._v(" "),a("h3",{attrs:{id:"select-a-domain-to-solve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-a-domain-to-solve"}},[t._v("#")]),t._v(" Select a domain to solve")]),t._v(" "),a("p",[t._v("This step can be skipped if a domain has already been defined. Otherwise, here is how to load one from the catalog of registered domains:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" skdecide "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" utils\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_registered_domains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prints: ['GymDomain', 'MasterMind', 'Maze', 'RockPaperScissors', ...]")]),t._v("\n\nMyDomain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_registered_domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Maze'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"find-compatible-solvers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-compatible-solvers"}},[t._v("#")]),t._v(" Find compatible solvers")]),t._v(" "),a("p",[t._v("This step can be skipped if a solver is already known to be compatible and selected as best candidate. Otherwise, here is how to find all compatible solvers:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("compatible_solvers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match_solvers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compatible_solvers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prints: [<class 'skdecide.hub.solver.lazy_astar.lazy_astar.LazyAstar'>, ...]")]),t._v("\n\nMySolver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" compatible_solvers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# selecting Lazy A* solver here")]),t._v("\n")])])]),a("h3",{attrs:{id:"compute-a-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compute-a-solution"}},[t._v("#")]),t._v(" Compute a solution")]),t._v(" "),a("p",[t._v("Here is how to solve "),a("code",[t._v("MyDomain")]),t._v(" with "),a("code",[t._v("MySolver")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Simple case (no arguments for domain nor solver)")]),t._v("\nsolution "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("solve_with"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MySolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Case with solver arguments")]),t._v("\nsolution "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("solve_with"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MySolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verbose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"test-the-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-the-solution"}},[t._v("#")]),t._v(" Test the solution")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Simple case (one basic rollout)")]),t._v("\nutils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rollout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example of additional rollout parameters")]),t._v("\nutils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rollout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_episodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_framerate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("In the example of the Maze solved with Lazy A*, the goal (in green) should be reached by the agent (in blue):")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/maze.png"),alt:"Maze"}}),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[a("strong",[t._v("Go to "),a("router-link",{attrs:{to:"_examples"}},[t._v("Examples")]),t._v(" for a curated list of Python notebooks (recommended to start).")],1)]),t._v(" "),a("p",[t._v("More examples can be found in the "),a("code",[t._v("/examples")]),t._v(" folder, showing how to import or define a domain, and how to run or solve it. Most of the examples rely on scikit-decide Hub, an extensible catalog of domains/solvers.")]),t._v(" "),a("p",[a("strong",[t._v("Warning")]),t._v(": the examples whose filename starts with an underscore are currently being migrated to the new API and might not be working in the meantime (same goes for domains/solvers inside "),a("code",[t._v("skdecide/hub")]),t._v(").")]),t._v(" "),a("p",[a("strong",[t._v("Warning")]),t._v(": some content currently in the hub (especially the MasterMind domain and the POMCP/CGP solvers) will require permission from their original authors before entering the public hub when open sourced.")]),t._v(" "),a("h3",{attrs:{id:"playground"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playground"}},[t._v("#")]),t._v(" Playground")]),t._v(" "),a("p",[t._v("The best example to try out scikit-decide capabilities might be "),a("code",[t._v("examples/full_multisolve.py")]),t._v(". This interactive console experience makes it easy to pick a domain among a pre-defined catalog selection:")]),t._v(" "),a("ul",[a("li",[t._v("Simple Grid World")]),t._v(" "),a("li",[t._v("Maze")]),t._v(" "),a("li",[t._v("Mastermind")]),t._v(" "),a("li",[t._v("Cart Pole (OpenAI Gym)")]),t._v(" "),a("li",[t._v("Mountain Car continuous (OpenAI Gym)")]),t._v(" "),a("li",[t._v("ATARI Pacman (OpenAI Gym)")])]),t._v(" "),a("p",[t._v("...and then solve it with any compatible solver (detected automatically) among following selection:")]),t._v(" "),a("ul",[a("li",[t._v("Random walk")]),t._v(" "),a("li",[t._v("Simple greedy")]),t._v(" "),a("li",[t._v("Lazy A* (classical planning)")]),t._v(" "),a("li",[t._v("PPO: Proximal Policy Optimization (deep reinforcement learning)")]),t._v(" "),a("li",[t._v("POMCP: Partially Observable Monte-Carlo Planning (online planning for POMDP)")]),t._v(" "),a("li",[t._v("CGP: Cartesian Genetic Programming (evolution strategy)")]),t._v(" "),a("li",[t._v("IW: Iterated Width search (width-based planning)")])]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": some requirements declared in above solvers still need fine-tuning, so in some cases an auto-detected compatible solver may still be unable to solve a domain (for now).")]),t._v(" "),a("p",[t._v("These combinations are particularly efficient if you want to try them out:")]),t._v(" "),a("ul",[a("li",[t._v("Simple Grid World -> Lazy A*")]),t._v(" "),a("li",[t._v("Maze -> Lazy A*")]),t._v(" "),a("li",[t._v("Mastermind -> POMCP: Partially Observable Monte-Carlo Planning")]),t._v(" "),a("li",[t._v("Cart Pole -> PPO: Proximal Policy Optimization")]),t._v(" "),a("li",[t._v("Mountain Car continuous -> CGP: Cartesian Genetic Programming")]),t._v(" "),a("li",[t._v("ATARI Pacman -> Random walk")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Some domains/solvers might require extra manual setup steps to work at 100%.\nIn the future, each scikit-decide hub entry might have a dedicated help page to list them, but in the meantime please refer to this:")]),t._v(" "),a("ul",[a("li",[t._v("OpenAI Gym domains: "),a("a",{attrs:{href:"http://gym.openai.com/docs/#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenAI Gym"),a("OutboundLink")],1),t._v(" for loading Gym environments not included by default (e.g. atari games).")])])]),t._v(" "),a("h2",{attrs:{id:"code-generators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-generators"}},[t._v("#")]),t._v(" Code generators")]),t._v(" "),a("p",[a("strong",[t._v("Go to "),a("router-link",{attrs:{to:"codegen"}},[t._v("Code generators")]),t._v(" for assistance when creating a new domain or solver.")],1)]),t._v(" "),a("h2",{attrs:{id:"roadmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[t._v("#")]),t._v(" Roadmap")]),t._v(" "),a("p",[t._v("Following features will be added to scikit-decide soon:")]),t._v(" "),a("ul",[a("li",[t._v("Scheduling API")]),t._v(" "),a("li",[t._v("PDDL parser")])])])}),[],!1,null,null,null);e.default=n.exports}}]);