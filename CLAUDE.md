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

## What Phase B involves (not yet done)

- Unified framing woven through the landing page (the "built to break" argument made
  explicit; relationship to manuscript foregrounded)
- Zeeman tool framing paragraph drawn from AppendixA_Unified_2.tex
- Embeddable/linkable from recognitionstudies.org
- Full epistemic-code-voice pass on all remaining user-facing prose

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
