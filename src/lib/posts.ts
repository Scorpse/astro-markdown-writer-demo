import { getCollection } from "astro:content";

export function sitePath(path = "") {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + path;
}

export function postPath(slug: string) {
  return sitePath("posts/" + encodeURIComponent(slug) + "/");
}

export async function publishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort((a, b) =>
    b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id)
  );
}

export const formatDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
}).format;
