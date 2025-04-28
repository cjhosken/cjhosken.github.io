import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    summary: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    coverImage: image().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  }),
});

export const collections = {
  'blog': blogCollection,
};