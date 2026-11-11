---
title: "Your first field note"
description: "A small example of how a Markdown file becomes a published post."
pubDate: 2026-11-11
tags: [astro, markdown]
---

Each post has a folder under `src/content/posts/`. The folder name becomes its
URL, and `index.md` holds the post. Keep images next to that file and use
relative paths when you insert them.

## Try it locally

~~~sh
npm ci
npm run dev
~~~

| Command | Output |
| --- | --- |
| `npm run dev` | A local server that reloads as you edit |
| `npm run build` | Static HTML, CSS, and assets in `dist/` |
| `npm run preview` | A local preview of the last build |

Create another folder and copy this file into it to start a post. Set
`draft: true` in the frontmatter while you work on it.
