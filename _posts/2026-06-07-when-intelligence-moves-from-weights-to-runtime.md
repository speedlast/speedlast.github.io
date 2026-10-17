---
layout: page
title: When Intelligence Moves from Weights to Runtime
date: 2026-06-07 00:00:00 +0800
description: A note on agent systems, reasoning, and runtime structure.
tags: agents reasoning runtime language
categories: AI
permalink: /blog/when-intelligence-moves-from-weights-to-runtime/
related_posts: false
---

<article class="oldspeedlast-blog-essay" lang="en" markdown="1">
  <div class="oldspeedlast-blog-essay-topbar">
    <a class="oldspeedlast-blog-essay-back" href="{{ '/blog/' | relative_url }}">Back to blog</a>
    <div class="oldspeedlast-blog-essay-actions">
      <time class="oldspeedlast-blog-essay-date" datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: '%B %-d, %Y.' }}</time>
      <nav class="oldspeedlast-blog-language" aria-label="Article language">
        <a class="active" href="{{ '/blog/when-intelligence-moves-from-weights-to-runtime/' | relative_url }}" hreflang="en" aria-current="page">English</a>
        <a href="{{ '/blog/when-intelligence-moves-from-weights-to-runtime/zh/' | relative_url }}" hreflang="zh-CN">中文</a>
      </nav>
    </div>
  </div>

  <header class="oldspeedlast-blog-essay-header">
    <h1 class="oldspeedlast-blog-essay-title">{{ page.title }}</h1>
    <p class="oldspeedlast-blog-essay-author">Luyi Lin</p>
    <p class="oldspeedlast-blog-essay-contact">luyilin@bjtu.edu.cn</p>
  </header>

<div class="oldspeedlast-blog-essay-body" markdown="1">
  <nav class="oldspeedlast-blog-toc" aria-label="Article outline">
    <p class="oldspeedlast-blog-toc-label">On This Page</p>
    <ol>
      <li><a href="#agent-stops-meaning-an-agent">Agent Stops Meaning an Agent</a></li>
      <li><a href="#boundary-between-models-and-runtime">Boundary between Models and Runtime</a></li>
      <li><a href="#reasoning-through-trajectories">Reasoning through Trajectories</a></li>
      <li><a href="#intelligence-at-runtime">Intelligence at Runtime</a></li>
      <li><a href="#epilogue">Epilogue</a></li>
    </ol>
  </nav>

<div class="oldspeedlast-blog-essay-content post-language post-language-en" lang="en" markdown="1">

This blog generally talks about agent and offers some not-that-new perspectives.

**Key words:** Agent, Reasoning, Language, Runtime, Model Evaluation, Interaction

## Agent Stops Meaning an Agent {#agent-stops-meaning-an-agent}

I've always been like this: trying to find an origin. I endow the origin with a fundamental significance. It doesn't mean that everything can be understood once the origin is found, though sometimes it might be. It means that an origin contains a process of becoming. What I want to examine is how concepts, or rather, definitions, come into being.


The modern AI definition of an agent is often given through Russell and Norvig: an agent perceives its environment through sensors and acts upon that environment through actuators. The important part is not the sentence, but the structure behind it: an agent is situated in an environment, receives signals from it, acts back upon it, and is shaped by the resulting feedback.


In this sense, the earlier conceptual schema of agent should be traced back to cybernetics. Cybernetics is concerned with how a system is coupled with its environment through a closed loop. Reinforcement learning later gives this schema an operational form: an agent takes actions from policy, the environment returns observations and rewards, and learning emerges through repeated interaction.


Language models changed this picture.


A language model, by itself, is not an agent in this classical sense. It does not live in an environment. It does not maintain persistent state across invocations. It does not act unless its outputs are connected to something outside the model.


Shunyu Yao introduced the concept of Language Agent into LLM, motivated by three limitations in language model:

1. stateless: language model don't memorize input.
2. ungroundedness: language model cannot interact with real world, limited intelligence to patterns compressed into parameters.
3. limited knowledge: language model cannot continuously acquire new information.



In Shunyu Yao’s framing, language agents address these limits by connecting models to internal mechanisms such as reasoning, learning, and planning, and to external environments such as web and code. He published several works including ReAct, Reflexion, Tree of Thoughts, WebShop and so on. The technique may vary, but the core insight remains the same:


**Language can serve as a universal interface.**


Once memory, retrieval, search, code execution, browser actions and tool APIs are all represented in language or language-adjacent formats, they become composable inside one inference process. Language is no longer just the medium of user interaction. It becomes the coordination layer between different mechanisms.


This is where the meaning of “agent” begins to drift.


By 2026, “agent” is less a precise scientific concept and more a product concept. It is too broad, too commercialized, and too overloaded. Technically, the important thing is not “agent” but the system behind it.


A foundation model provides strong priors over language, code, and world knowledge. It also provides basic abilities such as instruction following, in-context learning and long-context understanding. The system builds a runtime through providing external memory, tool APIs, resource allocation, and execution-feedback environments.


The runtime does not merely wrap the model. It reorganizes inference into an interactive process. From here on, intelligence is no longer only compressed in the model weights. Part of it is unfolded through the runtime.


## Boundary between Models and Runtime Becomes Vague {#boundary-between-models-and-runtime}

Agent system have turned intelligence into a product by unfolding it through runtime, bringing it closer to users. This has created enormous commercial value for companies like Anthropic and Google. But it also raises a question:


When an agent solves a problem, in what sense should we credit the model, and in what sense should we credit the runtime


The point is that, the boundary between model and runtime is not fixed. As models become better at abilities like long-context understanding, some logic currently handled by runtime may collapse back into the model. Conversely, as runtime become cheaper and more reliable, more cognitive work can be externalized into runtime. Boundary between Models and Runtime is becoming vague.


When we observe this tendency, we also gain a clearer criterion for judging a specific kind of agent research. For works that build an agent to solve a concrete problem, the most important thing is whether the work has found the right boundary between model and runtime for the problem it claims to solve.


A good piece of agent work is not one that blindly moves everything into runtime. Nor is it one that tries to train the model to internalize everything. It starts from a real and indispensable problem, decomposes it carefully, and decides where each part of the problem should be handled.


Some parts of the problem should be learned into weights, because they are general, reusable, and backed by accessible high-quality data. Some parts should remain in runtime, because they are contextual, changing, verifiable, or dependent on the external world. Some information should be stored as memory, some should be retrieved only when needed, and some should be checked through execution.


In this sense, research that focuses on building an agent to solve a specific problem is fundamentally about a set of trade-offs: what to learn, what to retrieve, what to remember, what to execute, what to verify, and what to leave to the environment.


Benchmark scores can still be useful, but they are not enough. What matters more is whether the agent system becomes more reliable, stable, and useful in real scenarios.


## Reasoning Is Unfolded through Trajectories {#reasoning-through-trajectories}

Around the same period that agents became widely discussed in the LLM community, OpenAI’s o1 pushed another word into the mainstream: reasoning. Both of them are about what happens when model output is no longer treated as a single final answer.


The common assumption here is simple: reasoning is an advanced ability, and this ability can be benchmarked through tasks such as math, code, and logic. These tasks have two characteristics: difficult but with specific answers.


There is a fundamental issue about this assumption: is the "reasoning" we discuss a capability or merely a behavior? LeCun cares a lot about this distinction. I care less. Nevertheless, it's a good thing to have doubts like this for AI.


For a long time, model evaluation has been Turing-like. If a system consistently exhibits a behavior, we operationally say it has the corresponding capability. Similarly, if a model solves AIME problems, writes correct programs, verifies mistakes, and handles multi-step tasks, it's natural to say that the model reasons. Yes. I agree with this philosophy. Currently the goal of AI researcher/engineer is not to reproduce the internal mechanism of human intelligence but to reproduce the intelligent behavior of human intelligence.


Research on reasoning roughly moved along two directions. One direction tried to train models to reason, through RL, SFT and distillation. The other tried to improve reasoning at test time, through prompting strategy, sampling, search and verification.


Mechanically, both directions operate on the same object: trajectories.


A SFT sample is a trajectory. A rollout in RL is a trajectory. A chain-of-thought is a trajectory. Tree search explores a space of possible trajectories. A verifier scores partial or complete trajectories.


Once model outputs are regarded not as final answers, but as intermediate steps within a trajectory, model generation process stops being a black-box input-output mapping. Instead, it becomes visible, inspectable and optimizable. This visibility also changes how computation can be spent at test time.


In this sense, reasoning is unfolded through trajectories.


The core insight here is, generation process in language model can be framed as a graph and again, language can serve as the interface for graph-like computation. Each node is an intermediate state and each edge is a state transition. The path starting from question state to answer state is a trajectory. More precisely, a trajectory is an ordered sequence of intermediate states and transitions through this graph.


Most of the methods in reasoning are basically optimizing trajectories in the space. Training-time methods change the model’s trajectory distribution, making good paths more likely to be generated. Test-time methods provide reasoning priors and spend additional computation to guide trajectory generation.


This formulation is suitable, and has been verified to be effective, because natural language is a convenient interface for expressing graph-like computational structures in a sequential form. To some extent, the success of NLP, LLM and Language Agent has relied heavily on the representational power and implicit priors of language.


This is also where language becomes dangerous. The representational power of language makes it easy for us to reify vague behaviors into seemingly concrete concepts.


The discussion about reasoning is so pervasive, while the definition of it is actually not concrete. This ambiguity creates bad research taste. People start treating “reasoning” as if it were a clean, atomic capability that can be injected into a model.


I prefer to view reasoning as a compositional behavior emerging from several foundational abilities. The problem is that this behavior seems to lie in a low-probability region of the model’s output distribution. It does not reliably appear in a single forward pass. It has to be unfolded through trajectories (currently).


AI is not a rigorous discipline. We constantly invent dazzling new terms to declare how distinctive our work is. And perhaps some of the work is indeed distinctive. But there are too many such terms, and many of them are not well-defined. We are naming phenomena, but not always trying to understand phenomena in a scientific way. Admittedly, in large-scale systems, what remains is often only the phenomenon itself, rather than a clean, stable, and falsifiable law. But this does not prevent a researcher from pursuing science. Even if we cannot fully reach it, we can still orient ourselves toward it.


Sometimes I even wonder whether any of these works will have history-class impact. In many cases, achieving world-class impact in the short term already seems impressive enough. I don't like this atmosphere personally.


## When Intelligence Moves from Weights to Runtime {#intelligence-at-runtime}

Reasoning is unfolded through trajectories. Trajectories happen in interactions.


For today’s agents, intelligence is not a matter of weights or runtime, but weights and runtime. The model provides priors and foundational abilities. The runtime provides memory, tools and execution-feedback flows. What we call agentic intelligence emerges from their coupling.


But these statements are too conservative. They are correct, yet not sufficiently revealing. To see the contradiction here more clearly, let's push the situation to its limit and examine a more extreme question:


Can intelligence be fully built from compressed representations, or must it eventually return to the world through interaction


It's an open question.


## Epilogue {#epilogue}

Today happens to be the first day of Gaokao (China’s national college entrance examination). During university, I have often recalled certain scenes from high school. One of them is a lecture given by a professor from ZJU. I remember asking him whether sensors implanted into the skin would affect the primacy of human perception. He replied that it was a philosophical question. Then a few months, or perhaps a year later, ChatGPT appeared and astonished the world. Representation learning, supported by scaling in compute and data, suddenly revealed an amazing amount of intelligence. After entering University, I have spent much of my time wandering inside the world of representations. But sometimes I still return to the same question I asked in high school: after we compress the world into representations, do we lose something about the primacy of perception


Intuitively, I feel that the primacy of perception may give rise to a more complete form of intelligence. The world is not only something to be represented. It is also something to be encountered. Yes, by that I mean, the world will reveal itself through interaction.


</div>
</div>
</article>
