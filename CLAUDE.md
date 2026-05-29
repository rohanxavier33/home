# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page personal portfolio for Rohan Xavier Gupta, built on the "Dimension by HTML5 UP" template (CCA 3.0). Pure static site — no package manager, no build script, no tests. Everything is served as-is from the repo root.

## Running locally

There is no dev server configured. To preview, open `index.html` directly in a browser, or run a throwaway static server from the repo root:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Architecture

The whole site is one HTML file with a hash-routed "article" pattern — important to understand before editing content sections.

- **`index.html`** — every visible section lives here as an `<article id="…">` inside `#main` (Intro, Work, About/Education, Certifications, Contact, plus the unused `#elements` style-guide article). The header nav links to these via `#intro`, `#work`, etc.
- **`assets/js/main.js`** — implements the article-swap behavior. On `hashchange`, it calls `$main._show(id)` / `$main._hide()` to toggle a single visible article, hide the header/footer, and add `is-article-visible` to `body`. Articles are hidden by default on init; the initial article (if any) is shown via the load handler at the bottom of the file. The `body.is-preload` class is removed 100ms after `load` to trigger entrance animations.
  - Consequence: **adding a new section means adding both an `<article id="foo">` to `index.html` AND a `<li><a href="#foo">` to the header `<nav>`**. The JS picks up new articles automatically via `$main.children('article')` — no JS change needed.
- **`assets/sass/`** — Sass source organized as `base/`, `components/`, `layout/`, `libs/`, with `main.scss` as the entry point. **There is no Sass build configured in this repo.** `assets/css/main.css` is the compiled output and is what the browser loads. If you edit Sass, you must recompile externally (e.g. `sass assets/sass/main.scss assets/css/main.css`) and commit the resulting CSS — or edit `main.css` directly for small tweaks. Don't assume a build step will run.
- **Vendored libs**: jQuery, `breakpoints.min.js` (responsive breakpoint helper used by `main.js` and the Sass `libs/breakpoints` mixin — keep the two breakpoint maps in sync if you change them), `browser.min.js`, FontAwesome CSS. Loaded directly via `<script>` tags at the bottom of `index.html`.

## Deployment

Hosted on GitHub at `rohanxavier33/home`. The site is served from `index.html` at the repo root (GitHub Pages or equivalent — pushing to `main` is the deploy).
