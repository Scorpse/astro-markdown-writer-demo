# Astro Markdown Starter

A static blog with posts in Markdown, a date-sorted archive, RSS, and light and
dark themes. Astro builds the site to `dist/` so it can run on GitHub Pages or
any static host.

[Use this template](https://github.com/Scorpse/astro-markdown-starter/generate)
· [Live example](https://scorpse.github.io/astro-markdown-starter/)

## Start a blog

Use **Use this template** to make a repository of your own, then clone it.
If you plan to merge future starter releases, fork this repository and clone
the fork to keep the shared Git history. You can also download a ZIP from the
**Code** menu.

With Node.js 24 LTS and npm installed, run these commands in your copy.

~~~sh
npm ci
npm run dev
~~~

Open the local URL printed by Astro. Edit `src/site.ts` for your site name and
description, and `src/styles/global.css` for your colors.

## Write a post

Copy `src/content/posts/first-note/index.md` into a new folder such as
`src/content/posts/my-first-post/index.md`. Use lowercase words separated by
hyphens for the folder name. That name determines the post's URL.

~~~markdown
---
title: "My first post"
description: "A short description for the archive and RSS."
pubDate: 2026-11-11
tags: [notes]
---

Write your post here.
~~~

Use Markdown for links, code fences, tables, and images. Put images beside
`index.md` and link them relatively, for example `![A map](./map.png)`. To
add an optional cover, put the following fields in the frontmatter.

~~~yaml
cover:
  image: ./map.png
  alt: "A map showing the route"
~~~

Set `draft: true` to omit a post from the generated pages and RSS. Files in a
public Git repository are visible to readers even when a post is marked draft.

~~~sh
npm run check
npm run build
npm run preview
~~~

## Publish

On GitHub, go to **Settings → Pages**, choose **GitHub Actions**, then run
**Build and publish** from the **Actions** tab. Later pushes to the default
branch deploy after a successful check and build. The workflow reads the
origin and path from GitHub Pages so links work for project sites under
`/<repo>/`, user sites at the root, and configured custom domains.

For another static host, use `npm ci` and `npm run build` and serve `dist/`.
Set the build environment's `SITE_URL` to your HTTPS origin. Set `BASE_PATH`
to the path prefix if the host serves the blog under a subdirectory.

## Take future updates

If you forked or cloned with shared history, keep your own posts and site
settings in their respective files. Fetch the starter's release tags and
merge the release you want from a branch so you can review the changes.

~~~sh
git remote add upstream https://github.com/Scorpse/astro-markdown-starter.git
git fetch upstream --tags
git switch -c update-starter
git merge v0.1.0
npm ci
npm run check
npm run build
~~~

Add the upstream remote once. For later updates use the new release tag.
If you used **Use this template** or downloaded a ZIP, review the release
diff and apply the layout or dependency changes you want. Your copy has its
own history.

This starter uses Astro's standard Markdown collections. Scorpse Writer is a
separate desktop app configured for the Scorpse blog's post format.
