---
layout: post
title: When Intelligence Moves from Weights to Runtime
date: 2026-06-07 00:00:00 +0800
description: A note on agent systems, reasoning, and runtime structure.
tags: agents reasoning runtime language
categories: AI
permalink: /blog/when-intelligence-moves-from-weights-to-runtime/
related_posts: false
toc:
  sidebar: left
---

This blog generally talks about agent and offers some not-that-new perspectives.

**Key words:** Agent, Reasoning, Language, Runtime, Model Evaluation, Interaction

## Agent Stops Meaning an Agent

I've always been like this: trying to find an origin. I endow the origin with a fundamental significance. It doesn't mean that everything can be understood once the origin is found, though sometimes it might be. It means that an origin contains a process of becoming. What I want to examine is how concepts, or rather, definitions, come into being.

_我总是想找到一个起点，我赋予了起点一种本原的意义。这并不是说找到起点，就能理解一切了（尽管在有些时候是这样的），而是说，起点里蕴含着一种发生，我想去看看概念、定义是如何发生的。_

The modern AI definition of an agent is often given through Russell and Norvig: an agent perceives its environment through sensors and acts upon that environment through actuators. The important part is not the sentence, but the structure behind it: an agent is situated in an environment, receives signals from it, acts back upon it, and is shaped by the resulting feedback.

_在现代 AI 语境中，Agent 的定义常常来自 Russell 和 Norvig：一个 Agent 通过 sensors 感知环境，并通过 actuators 作用于环境。重要的并不是这句话本身，而是它背后的结构：一个 Agent 被置于环境之中，从环境接收信号，对环境产生行动，并被行动所带来的反馈塑造。_

In this sense, the earlier conceptual schema of agent should be traced back to cybernetics. Cybernetics is concerned with how a system is coupled with its environment through a closed loop. Reinforcement learning later gives this schema an operational form: an agent takes actions from policy, the environment returns observations and rewards, and learning emerges through repeated interaction.

_在这个意义上，Agent 更早的想象图式应当来自于控制论。控制论讨论的是一个系统如何通过闭环与环境耦合。强化学习后来给了这个想象图式一种可操作的形式：Agent 从policy中选择 action，environment 返回 observation 和 reward，而 learning 发生在反复的 interaction 之中。_

Language models changed this picture.

_语言模型改变了这个图景。_

A language model, by itself, is not an agent in this classical sense. It does not live in an environment. It does not maintain persistent state across invocations. It does not act unless its outputs are connected to something outside the model.

_语言模型本身，并不是经典意义上的 Agent。它并不生活在一个环境里。它不会在不同调用之间维持持久状态。除非它的输出被连接到模型外部的某个东西，否则它也不会真正行动。_

Shunyu Yao introduced the concept of Language Agent into LLM, motivated by three limitations in language model:

1. stateless: language model don't memorize input.
2. ungroundedness: language model cannot interact with real world, limited intelligence to patterns compressed into parameters.
3. limited knowledge: language model cannot continuously acquire new information.

_姚顺宇将 Language Agent 的概念引入 LLM ，他的动机来自于他观察到的语言模型本身的三个缺陷：_

1. _Stateless：语言模型本身不会记忆输入。_
2. _Ungroundedness：语言模型无法与真实世界交互，其智能被限制在压缩进参数中的模式之内。_
3. _Limited knowledge：语言模型无法持续地获取新信息。_

In Shunyu Yao’s framing, language agents address these limits by connecting models to internal mechanisms such as reasoning, learning, and planning, and to external environments such as web and code. He published several works including ReAct, Reflexion, Tree of Thoughts, WebShop and so on. The technique may vary, but the core insight remains the same:

_在姚顺宇的表述中，Language Agent 试图通过把模型连接到推理、学习、规划这样的内部机制，以及浏览器和代码这样的外部环境，来克服这些局限。他发表了很多工作，包括ReAct、Reflexion、Tree of Thoughts、WebShop等等。具体技术可能不同，但核心的insight是一样的：_

**Language can serve as a universal interface.**

_**语言可以作为一种通用接口。**_

Once memory, retrieval, search, code execution, browser actions and tool APIs are all represented in language or language-adjacent formats, they become composable inside one inference process. Language is no longer just the medium of user interaction. It becomes the coordination layer between different mechanisms.

_一旦记忆、检索、搜索、代码执行、网页操作和工具调用都被表示为语言或接近语言的格式，它们就可以在同一个 inference 里被组合起来。语言不再只是用户交互的媒介。它变成了不同机制之间的 coordination layer。_

This is where the meaning of “agent” begins to drift.

_也正是在这里，“Agent” 的含义开始漂移。_

By 2026, “agent” is less a precise scientific concept and more a product concept. It is too broad, too commercialized, and too overloaded. Technically, the important thing is not “agent” but the system behind it.

_到 2026 年，“Agent” 已经不太是一个精确的科学概念，而更像是一个产品概念。它太宽泛，太商业化，也承载了太多含义。从技术角度来说，真正重要的技术对象不是 “Agent”，而是它背后的system。_

A foundation model provides strong priors over language, code, and world knowledge. It also provides basic abilities such as instruction following, in-context learning and long-context understanding. The system builds a runtime through providing external memory, tool APIs, resource allocation, and execution-feedback environments.

_Foundation model 提供了关于语言、代码和世界知识的先验。它也提供了一些基础能力，比如指令遵循、上下文学习和长上下文理解。系统则通过提供外部记忆、工具调用、资源分配和执行-反馈环境，来建立runtime。_

The runtime does not merely wrap the model. It reorganizes inference into an interactive process. From here on, intelligence is no longer only compressed in the model weights. Part of it is unfolded through the runtime.

_Runtime 不只是把模型包起来，它把 inference 重新组织成了一个交互过程。至此，智能不再只是被压缩在模型权重里，它的一部分在 runtime 中被展开。_

## Boundary between Models and Runtime becomes vague 模型与运行时的边界变得模糊

Agent system have turned intelligence into a product by unfolding it through runtime, bringing it closer to users. This has created enormous commercial value for companies like Anthropic and Google. But it also raises a question:

_Agent system让智能通过runtime变成了产品，离用户更近。这为Anthropic, Google这些公司带来了惊天利润，但也带来了一个问题：_

When an agent solves a problem, in what sense should we credit the model, and in what sense should we credit the runtime

_当一个 Agent 解决了一个问题时，我们应该在什么意义上把功劳归于模型，又应该在什么意义上把功劳归于 runtime？_

The point is that, the boundary between model and runtime is not fixed. As models become better at abilities like long-context understanding, some logic currently handled by runtime may collapse back into the model. Conversely, as runtime become cheaper and more reliable, more cognitive work can be externalized into runtime. Boundary between Models and Runtime is becoming vague.

_关键在于，model 和 runtime 之间的边界不是固定的。随着模型在 long-context understanding这些能力上变得更强，一些当前由 runtime 处理的逻辑，可能会重新塌缩回模型内部。反过来，随着 runtime 变得更便宜、更可靠，更多认知性的计算过程也可以被外部化到 runtime 中。模型与运行时的边界正在变得模糊。_

When we observe this tendency, we also gain a clearer criterion for judging a specific kind of agent research. For works that build an agent to solve a concrete problem, the most important thing is whether the work has found the right boundary between model and runtime for the problem it claims to solve.

_当我们注意到这个趋势，我们也就可以判断一类 Agent 研究的价值。对于那些试图构建一个 Agent 来解决具体问题的工作，最重要的是这个工作是否为它声称要解决的问题，找到了合适的 model-runtime boundary。_

A good piece of agent work is not one that blindly moves everything into runtime. Nor is it one that tries to train the model to internalize everything. It starts from a real and indispensable problem, decomposes it carefully, and decides where each part of the problem should be handled.

_一个好的 Agent 工作，不是把所有东西都盲目搬到 runtime 里；也不是训练模型把一切都内化进 weights。它应该从一个真实且不可或缺的问题出发，清晰地分解这个问题，并决定问题的每个部分应该在哪里被解决。_

Some parts of the problem should be learned into weights, because they are general, reusable, and backed by accessible high-quality data. Some parts should remain in runtime, because they are contextual, changing, verifiable, or dependent on the external world. Some information should be stored as memory, some should be retrieved only when needed, and some should be checked through execution.

_问题中的一些部分应该被学进权重，因为它们是一般性的、可复用的，并且可获得高质量数据的。另一些部分则应该留在 runtime，因为它们是上下文相关的、变化的、可验证的，或者依赖外部世界的。有些信息应该作为记忆被保存，有些信息应该只在需要时被检索，有些信息应该通过执行被检查。_

In this sense, research that focuses on building an agent to solve a specific problem is fundamentally about a set of trade-offs: what to learn, what to retrieve, what to remember, what to execute, what to verify, and what to leave to the environment.

_在这个意义上，那些专注于构建 Agent 来解决具体问题的研究，本质上是在处理一组 trade-offs：什么应该被学习，什么应该被检索，什么应该被记住，什么应该被执行，什么应该被验证，以及什么应该留给环境本身。_

Benchmark scores can still be useful, but they are not enough. What matters more is whether the agent system becomes more reliable, stable, and useful in real scenarios.

_评测上的分数当然仍然有用，但它们是不够的。更重要的是，这个 agent system 在真实场景中是否变得更可靠、更稳定、也更有用。_

## Reasoning is Unfolded through Trajectories 推理是通过轨迹展开的

Around the same period that agents became widely discussed in the LLM community, OpenAI’s o1 pushed another word into the mainstream: reasoning. Both of them are about what happens when model output is no longer treated as a single final answer.

_与 Agent 爆火的几乎同时，OpenAI 的 o1 模型将另一个词推到了主流视野中：Reasoning 。二者都在讨论：当模型输出不再被看作一次单独的最终答案时，会发生什么。_

The common assumption here is simple: reasoning is an advanced ability, and this ability can be benchmarked through tasks such as math, code, and logic. These tasks have two characteristics: difficult but with specific answers.

_关于Reasoning，一般大家的共识是：Reasoning是一种高级的能力，并且这种能力可以通过数学、代码、逻辑这几类任务上的表现反映出来。这几类任务有2个特点：困难，但是有明确的答案。_

There is a fundamental issue about this assumption: is the "reasoning" we discuss a capability or merely a behavior? LeCun cares a lot about this distinction. I care less. Nevertheless, it's a good thing to have doubts like this for AI.

_在讨论与Reasoning有关的技术手段之前，首先有一个很本质的问题：我们讨论的reasoning是一种能力还是一种行为？LeCun很在意这件事情，但我想这件事或许没那么重要。不过，拥有LeCun的质疑，对AI领域来说是重要的。_

For a long time, model evaluation has been Turing-like. If a system consistently exhibits a behavior, we operationally say it has the corresponding capability. Similarly, if a model solves AIME problems, writes correct programs, verifies mistakes, and handles multi-step tasks, it's natural to say that the model reasons. Yes. I agree with this philosophy. Currently the goal of AI researcher/engineer is not to reproduce the internal mechanism of human intelligence but to reproduce the intelligent behavior of human intelligence.

_长期以来，我们对模型的评测都是图灵式的：当模型表现出来这种行为时，我们就认为它具备这种能力。同样地，如果一个模型能够解出 AIME 数学题、写出正确的程序、验证自己的错误，并处理多步任务，那么说这个模型具备 reasoning 能力，是很自然的。是的，我也赞同图灵的这种哲学，当下 AI researcher / engineer 的目标，不是要还原人类智能，是要重现人类智能。_

Research on reasoning roughly moved along two directions. One direction tried to train models to reason, through RL, SFT and distillation. The other tried to improve reasoning at test time, through prompting strategy, sampling, search and verification.

_关于 reasoning 的研究大致沿着两个方向展开：一个方向试图通过强化学习、监督微调和蒸馏来训练模型进行 reasoning；另一个方向则试图在 test time 通过提示词策略、抽样、搜索和验证等方法提升模型表现。_

Mechanically, both directions operate on the same object: trajectories.

_从机制上看，这两个方向操作的是同一个对象：trajectories。_

A SFT sample is a trajectory. A rollout in RL is a trajectory. A chain-of-thought is a trajectory. Tree search explores a space of possible trajectories. A verifier scores partial or complete trajectories.

_一个监督微调样本是一条轨迹。强化学习中的一次 rollout 是一条轨迹。思维链是一条轨迹。树搜索探索的是一个由轨迹构成的空间。Verifier 则对部分或完整的轨迹进行打分。_

Once model outputs are regarded not as final answers, but as intermediate steps within a trajectory, model generation process stops being a black-box input-output mapping. Instead, it becomes visible, inspectable and optimizable. This visibility also changes how computation can be spent at test time.

_一旦我们不再把模型输出看作最终答案，而是把它看作轨迹中的中间步骤，模型的生成过程就不再是一个黑箱式的输入-输出映射。相反，它变得可见、可检查、可优化。这种可见性也改变了 test-time 阶段计算量的使用方式。_

In this sense, reasoning is unfolded through trajectories.

_在这个意义上，reasoning是通过轨迹展开的。_

The core insight here is, generation process in language model can be framed as a graph and again, language can serve as the interface for graph-like computation. Each node is an intermediate state and each edge is a state transition. The path starting from question state to answer state is a trajectory. More precisely, a trajectory is an ordered sequence of intermediate states and transitions through this graph.

_这里的核心 insight 是：语言模型的生成过程可以被建模成一个图，而语言再次成为了这种图式计算的接口。每一个节点都是一个中间状态，每一条边都是一次状态转移。从 question state 到 answer state 的一条路径，就是一条 trajectory。更准确地说，trajectory 是这个图中由中间状态和状态转移组成的有序序列。_

Most of the methods in reasoning are basically optimizing trajectories in the space. Training-time methods change the model’s trajectory distribution, making good paths more likely to be generated. Test-time methods provide reasoning priors and spend additional computation to guide trajectory generation.

_大多数 reasoning 的技术手段，本质上都是在优化整个空间中的 trajectories。训练方法改变的是模型的 trajectory distribution，让好的路径更容易被生成出来。test-time 方法则提供 reasoning priors，并投入额外的计算量，去引导 trajectory 的生成。_

This formulation is suitable, and has been verified to be effective, because natural language is a convenient interface for expressing graph-like computational structures in a sequential form. To some extent, the success of NLP, LLM and Language Agent has relied heavily on the representational power and implicit priors of language.

_这种建模这是合适的，并被验证了是有效的，因为自然语言是一个很好用的接口，可以把图这种计算结构线性化地表达出来。在某种程度上，NLP、LLM 以及 Language Agent 的成功，都高度依赖于语言本身的表征能力和隐含先验。_

This is also where language becomes dangerous. The representational power of language makes it easy for us to reify vague behaviors into seemingly concrete concepts.

_这也正是语言危险的地方。语言的表征能力让我们很容易把一些模糊的行为，过早地实体化成看似具体的概念。_

The discussion about reasoning is so pervasive, while the definition of it is actually not concrete. This ambiguity creates bad research taste. People start treating “reasoning” as if it were a clean, atomic capability that can be injected into a model.

_在2025年，关于 reasoning 的讨论太多了，但它其实没有明确定义。这种模糊性造成了一种不好的研究品味：人们有时候会把 “reasoning” 当成一种干净的、原子化的能力，好像它可以被直接注入到模型里。_

I prefer to view reasoning as a compositional behavior emerging from several foundational abilities. The problem is that this behavior seems to lie in a low-probability region of the model’s output distribution. It does not reliably appear in a single forward pass. It has to be unfolded through trajectories (currently).

_我更愿意把 reasoning 看作一种由几种基础能力组合涌现出来的行为。问题在于，这种行为似乎位于模型输出分布中的低概率区域。它并不会在一次 forward pass 中稳定地出现，而（目前）只能通过 trajectories 被展开出来。_

AI is not a rigorous discipline. We constantly invent dazzling new terms to declare how distinctive our work is. And perhaps some of the work is indeed distinctive. But there are too many such terms, and many of them are not well-defined. We are naming phenomena, but not always trying to understand phenomena in a scientific way. Admittedly, in large-scale systems, what remains is often only the phenomenon itself, rather than a clean, stable, and falsifiable law. But this does not prevent a researcher from pursuing science. Even if we cannot fully reach it, we can still orient ourselves toward it.

_AI 并不是一个严谨的学科。我们不断制造各种光鲜的新术语，用它们来宣告自己的工作有多么独特。当然，其中一些工作也许确实独特。但问题在于，这样的术语太多了，而其中很多并没有被清楚地定义。我们在给现象命名，却不总是尝试以科学的方式理解现象。诚然，在大规模系统里，很多时候我们最终能够留下的只是现象本身，而不是像传统科学那样清晰、稳定、可证伪的规律。但这并不妨碍一个科研工作者对“科学”的追求。虽不能至，然心向往之。_

Sometimes I even wonder whether any of these works will have history-class impact. In many cases, achieving world-class impact in the short term already seems impressive enough. I don't like this atmosphere personally.

_有时候我甚至会怀疑，这些工作里究竟有多少能留下 history-class impact。更多时候，能在短期内制造 world-class impact，就已经被认为足够成功。我个人不喜欢这种氛围。_

## When Intelligence Moves from Weights to Runtime 当智能发生在运行时

Reasoning is unfolded through trajectories. Trajectories happen in interactions.

_Reasoning是通过轨迹展开的。轨迹发生在交互之中。_

For today’s agents, intelligence is not a matter of weights or runtime, but weights and runtime. The model provides priors and foundational abilities. The runtime provides memory, tools and execution-feedback flows. What we call agentic intelligence emerges from their coupling.

_对于现在的Agent来说，智能不是weights或runtime的问题，是weights和runtime的问题。模型提供先验和基础能力；runtime 提供记忆、工具和执行-反馈流。我们称为Agentic Intelligence的东西，就发生在二者的耦合之中。_

But these statements are too conservative. They are correct, yet not sufficiently revealing. To see the contradiction here more clearly, let's push the situation to its limit and examine a more extreme question:

_但这些说法太保守了，它很正确但不利于探究。为了看清楚这里的矛盾，让我们把情况推至极限，考察一个更极端的问题：_

Can intelligence be fully built from compressed representations, or must it eventually return to the world through interaction

_智能能否完全建立在被压缩的表征之上？还是说，它最终必须通过交互回到世界本身？_

It's an open question.

_这是个开放问题。_

## Epilogue 结语

Today happens to be the first day of Gaokao (China’s national college entrance examination). During university, I have often recalled certain scenes from high school. One of them is a lecture given by a professor from ZJU. I remember asking him whether sensors implanted into the skin would affect the primacy of human perception. He replied that it was a philosophical question. Then a few months, or perhaps a year later, ChatGPT appeared and astonished the world. Representation learning, supported by scaling in compute and data, suddenly revealed an amazing amount of intelligence. After entering University, I have spent much of my time wandering inside the world of representations. But sometimes I still return to the same question I asked in high school: after we compress the world into representations, do we lose something about the primacy of perception

_今天恰好是高考第一天，大学期间，我也经常会回想起我在高中时的一些情境。我记得其中一幅情境是，有一次，学校邀请浙大的教授来讲座，我记得我向他提问：植入皮肤的传感器，是否会影响人的感知的第一性？那个教授表示这是个哲学问题。几个月，或者一年之后，ChatGPT 横空出世，震惊世界。表征学习在算力和数据的 scaling 下，展现出了惊人的智能。进入大学以后，我花了很多时间在 representation 的世界里兜转。但有时候，我仍然会回到高中时提出的那个问题：当我们把世界压缩成表征之后，我们是否也破坏了感知的第一性？_

Intuitively, I feel that the primacy of perception may give rise to a more complete form of intelligence. The world is not only something to be represented. It is also something to be encountered. Yes, by that I mean, the world will reveal itself through interaction.

_我直觉上认为，感知的第一性会建立起更完整的智能。世界不只是被表示的，它也是在交互中被“发生”的。是的，我是在说，世界会通过交互建立起它自己。_
