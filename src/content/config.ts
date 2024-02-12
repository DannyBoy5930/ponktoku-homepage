import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()),
    category: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};

