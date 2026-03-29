# umedcta-portfolio — Project Instructions for Claude

## What this repository is

This is the public-facing portfolio for *Understanding Mathematics as an Emancipatory
Discipline: A Critical Theory Approach* (UMEDCTA) — a philosophical manuscript by Tio
Savich. Seven interactive HTML tools, each modeling a specific reasoning structure from
the manuscript's argument.

This repo was split from `TioSavich/UMEDCTA` in March 2026 because the main repo's
GitHub Pages deployment was blocked by an education account Actions restriction. Clean
separation also made sense: the portfolio tools are audience-facing; the research archive
(Prolog formalization) belongs elsewhere. The design doc for that decision is at
`~/.gstack/projects/TioSavich-UMEDCTA/tio-main-design-20260319-114754.md`.

## What Phase A accomplished (this repo's initial state)

- Restructured seven tools from the original flat repo into named subdirectories
- Fixed the More_Zeeman DOM-thrash bug (debounced `MatrixAutomaton.grow()` to 500ms)
- Removed defunct polyfill.io script from quadrilateral-sub
- Replaced AI-generated "epistemic heroism" README files with honest descriptions
- Added a portfolio landing page (`index.html`) with philosophical framing
- Title and footer corrected: UMEDCTA = *Understanding Mathematics as an Emancipatory
  Discipline: A Critical Theory Approach* (not the hallucinated analytic-pragmatist name
  that appeared in prior AI-generated text)

## What Phase B accomplished (2026-03-28, Cowork session)

- Redesigned the More Machine (`more-zeeman/index.html` + `more-machine.js`), replacing
  the old `index_unified.html` / `script_unified.js` with a progressive-disclosure
  experience. The old files are preserved alongside the new ones.
- **Progressive disclosure**: page unfolds in 5 phases keyed to snap count. Phase 0 is
  just the machine and "drag the blue point." Each subsequent phase reveals narration,
  tape, matrix, bifurcation plot, controls, investigation prompts, and the "what's
  missing" footer — in that order. Text follows experience, not the reverse.
- **New features**: snap tape (horizontal scrolling history with tension bars),
  bifurcation scatter plot (control distance vs. snap angle, accumulates over time),
  snap flash feedback, responsive layout with touch support, amber/red/blue color system
  for tension/snap/release.
- **Framing prose** drawn from manuscript sources (the fist metaphor from Ch. 2.1, the
  catastrophe explanation from Ch. 4.5, the hysteresis gap). Honest about what's missing:
  ideal springs don't remember strain, the acoustic panel is a translation not a model.
- Updated landing page link to point to new `more-zeeman/index.html` with tighter
  description.
- Landing page description rewritten for the More Machine card.

## What Phase C involves (not yet done)

- Landing page rewrite: open with an invitation to say "no" — the circular narrative
  from More Machine through all seven tools and back. See auto-memory for the full
  vision (2026-03-28 conversation).
- Fix the hermeneutic calculator JS bug (reported 2026-03-28, not yet diagnosed)
- Embeddable/linkable from recognitionstudies.org
- Full epistemic-code-voice pass on all remaining user-facing prose
- More Machine further work: real hysteresis in band physics (material memory),
  long-run bifurcation investigation mode, sound/compression improvements
- Cross-repository organization (long-term goal — note patterns in disorganization
  as they surface)

## Voice and Epistemic Commitments

This is a philosophical project. Words matter — identifiers, comments, docstrings, UI
copy, and prose all carry inferential weight. Apply the **epistemic-code-voice** skill
(`/epistemic-code-voice`) whenever writing or reviewing code artifacts in this repository.

Four commitments govern all prose surfaces:

1. **Epistemic humility** — documentation invites understanding rather than asserting
   authority
2. **Anti-ocular language** — knowledge is not sight; avoid picture-thinking in
   non-technical prose
3. **Philosophical coherence** — when terms from the project dictionary appear
   (Recognition, Vernunft, Geist, Dialectic, Sublation, Intersubjectivity, and others),
   they carry their correct inferential commitments
4. **Anti-schlock** — user-facing prose (README, website, UI) is free of AI parallelisms
   and foreclosing meta-commentary

> **Note on scope**: Schlock rules and anti-ocular passes apply to prose users *read*.
> They do not apply to code logic.

## The central argument (context for framing decisions)

Most educational software claims to make things clear. These tools are designed to help
people find where clarity breaks down — and to experience that breakdown as
philosophically significant rather than as failure. The "whoa" is that the tools are
honest about their own limits in a way most software isn't. That honesty is the argument,
not a disclaimer.

The manuscript's central claim: formalisms break productively (the Hegelian Infinite)
when they are *consistent* under Brandom's interpretation of Kant's synthetic unity of
apperception. A disorganized codebase undermines the argument rather than enacting it.

## Audiences

Three audiences must be served simultaneously:
- Academic philosophers (Brandom, Hegel, Habermas)
- Hiring committees (clarity, rigor, intellectual ambition)
- Curious general public (tools that reward engagement without requiring background)

The primary audience for the interactive tools is **educators** — people teaching
mathematics who may not have catastrophe theory or Hegelian philosophy background.
The tools must teach by being the thing they describe. A page about progressive
disclosure should itself use progressive disclosure. A page about productive failure
should let you fail productively.

## The Circular Narrative

The portfolio tells a single story that loops:

1. **More Machine** — catastrophe produces a countable judgment (M or W)
2. **Hermeneutic Calculator** — children's arithmetic strategies, counting
3. **Ace of Bases** — base systems as normative choice, bootstrapping via
   diagonalization
4. **Ten Types of Difference** — Brandom's Hegel, geometry as logic
5. **Quadrilateral Substitution** — expressive power, substitution inference
6. **Five Practices / Classroom Web** — pedagogy, connecting student thinking
7. **AI Framework** — what kind of action AI performs in classrooms
→ Back to More Machine. "There's always more to say."

Each tool should link to the next with a breadcrumb that carries the argument
forward. The landing page should eventually open with an invitation to say "no" —
the most important word in learning. It tells us when to back off, and when we
might be accepted. When "no" is overridden, we feel helpless or angry.

## Design Principle: Progressive Disclosure

Learned from the More Machine redesign (2026-03-28): front-loading explanation
before experience is the pedagogical error the manuscript argues against. Tools
should unfold through interaction:
- Start with almost nothing — an invitation to act
- Let the user experience the phenomenon before reading about it
- Reveal complexity in response to engagement, not in advance of it
- Be honest about what's missing at the end, not at the beginning

## The More Machine as Metaphor

The Zeeman machine is a metaphor for Tio's own body writing — pulled toward
different goals by the reader, going through catastrophe to produce judgment. The
matrix is an intersubjective scoreboard. The tape is a Turing machine head writing
to an ever-unfolding record. The springs are ideal (they don't remember strain) —
that absence of hysteresis is where the model breaks, on purpose.

Key manuscript sources for the More Machine:
- Fist/compression metaphor: `UMEDCA_2026/split_output/02_Shadows_and_Dissent/01_The_Sound_of_Time/`
- Catastrophe and diagonalization: `UMEDCA_2026/split_output/04_The_Hermeneutic_Calculator/03_Algorithmic_Elaboration_and_History/`
- Modal logic formalization: `September_UMEDCA/October_Fast_Edit/AppendixA_Unified_2.tex`
- Double Zeeman (social dynamics): `UMEDCA_2026/split_output/02_Shadows_and_Dissent/04_Thoughts_for_Two_Who_Are_You/`

## gstack

Use the `/browse` skill from gstack for all web browsing. Never use
`mcp__claude-in-chrome__*` tools.

Available gstack skills:
- `/office-hours` - Office hours discussion
- `/plan-ceo-review` - CEO review planning
- `/plan-eng-review` - Engineering review planning
- `/plan-design-review` - Design review planning
- `/design-consultation` - Design consultation
- `/review` - Code review
- `/ship` - Ship a change
- `/browse` - Web browsing (use this for all web browsing)
- `/qa` - QA testing
- `/qa-only` - QA only (no code changes)
- `/design-review` - Design review
- `/setup-browser-cookies` - Set up browser cookies
- `/retro` - Retrospective
- `/investigate` - Investigate an issue
- `/document-release` - Document a release
- `/codex` - Codex tasks
- `/careful` - Careful mode
- `/freeze` - Freeze changes
- `/guard` - Guard mode
- `/unfreeze` - Unfreeze changes
- `/gstack-upgrade` - Upgrade gstack

If gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build
the binary and register skills.
