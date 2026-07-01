# LinkedIn post — Loop engineering: the agentic builder's commandments
# Companion to: content/writing/loop-engineering-commandments.mdx
# Status: draft

---

"Loop engineering" went viral this week after Boris Cherny (Claude Code) and Peter Steinberger (OpenClaw) used the phrase — then Andrew Ng and Andrej Karpathy both wrote about it in the same week.

The idea is real. Here are the three commandments I actually follow, learned from building Lexomat (a production legal AI) solo with these loops:

**I. Separate the planner, the builder, and the evaluator — never let any one grade its own work.**

The moment an agent evaluates its own output, it converges on slop. In my workflow: one agent plans (writes a PLAN.md with testable criteria), a second builds against it (commits, tests, iterates), a third evaluates adversarially (/ck: four parallel agents told the code is broken and tasked to prove it). Three roles, three context windows, three system prompts. Karpathy calls this the most common failure: "mixing the roles is the most common failure I see."

**II. Write state to disk, not to context.**

Context windows compact, rot, and hide what happened an hour ago behind a summary you never wrote. A file on disk does not lie. My CLAUDE.md — the harness — is what every agent reads first: the codebase layout, the invariants, the non-negotiables. Without it, each session starts from zero. With it, a session can crash and restart at iteration nine and ship something working at iteration eleven. The harness is the most underrated investment in agentic building.

**III. The bottleneck always moves — find it and ignore everything else.**

Coding → planning → verification → taste. Each loop you close properly reveals the next constraint. For Lexomat, once the coding and planning loops were solid, the bottleneck became legal domain correctness — something no agent can close without a domain expert. The loop's job is to make the next bottleneck visible. If everything feels smooth, you are not looking carefully enough.

Three more I follow that don't get discussed enough:

**X. One problem per context window — file, don't fix inline.** When problem B surfaces while solving A, open a GitHub issue and return to A. Filing is a cognitive dump. Bundling is context pollution, a harder diff to review, and a revert that takes two things down instead of one.

**XI. Score the subjective before you need the agent to match your taste.** If your aesthetic rubric is not written down, the agent converges on its training-data average, not yours. Vague guidance ("make it clean") produces nothing. A rubric with reference examples and weighted axes produces something you can push against.

**XII. Triage before building — closing as won't-do is a valid outcome.** Re-read the issue against the current codebase before touching code. The bug may no longer exist. The refactor may target removed code. A clean close comment is a better outcome than an unnecessary PR.

**XIII. Write the reproducing test before asking for the fix.** Not "fix until it feels done." Write the failing test that proves the bug exists, then ask for the fix, then confirm the test passes. Done is defined by the test passing, not by the agent's confidence. Same principle as the contract (commandment III) applied to debugging.

**XIV. Match the framework to the task — native, discipline, or context engineering.** Most developers reach for the heaviest tool they know and apply it to everything. That is the wrong default. Three tools exist for three distinct problems: Claude Code native (~200K tokens, ~20 min) for anything under three files; Superpowers (~250K, ~60 min) when discipline is the risk — the agent rushes past tests or skips the spec; GSD (~1.2M, ~105 min) when context rot is the risk — long sessions where architectural coherence erodes. When both risks exist, stack them. Reach for a heavier framework only when context rot or coordination overhead would cost more than the framework's token overhead.

One more non-obvious failure mode worth naming: *context drift*, which is more dangerous than context overflow. Overflow is obvious — the session errors. Drift is silent: the agent still responds coherently but has lost the original intent and starts fabricating architectural alignment. Short sessions with clear handoff artifacts beat long sessions with vague summaries.

In practice: total elapsed time from brief to merged PR on a medium Lexomat feature is two to four hours. My active time: twenty to forty minutes. The rest is the loop.

Building software has changed. The unit of leverage is no longer the prompt — it is the loop, and the harness that makes it compound.

Full breakdown of all fourteen commandments on my blog → [link]

---
*Tags: #AI #AgenticAI #SoftwareEngineering #ClaudeCode #LLM #LoopEngineering*
