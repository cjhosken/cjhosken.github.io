import { defineCollection, z } from 'astro:content';

// Define the `posts` collection
const postsCollection = defineCollection({
  type: 'content', // This indicates that the collection contains Markdown or MDX files
  schema: z.object({
    title: z.string(), // Title of the post
    date: z.string(), // Year of the post
    role: z.string(), // Role in the project
    img: z.string().optional(), // Optional image path
    excerpt: z.string().optional(), // Optional excerpt
    type: z.string(), // Optional excerpt
  }),
});

// Export all collections
export const collections = {
  posts: postsCollection,
};