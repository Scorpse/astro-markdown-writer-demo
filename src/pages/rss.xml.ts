import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { postPath, publishedPosts, sitePath } from "../lib/posts";
import { site } from "../site";

export const GET: APIRoute = async ({ site: origin, url }) =>
  rss({
    title: site.title,
    description: site.description,
    site: new URL(sitePath(), origin ?? url),
    items: (await publishedPosts()).map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      link: postPath(id),
    })),
  });
