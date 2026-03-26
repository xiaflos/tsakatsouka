import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  thumbnail: z.string().optional(),
  templateKey: z.string().optional(),
  // Add other fields as discovered
  image: z.string().optional(),
  featuredimage: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
}).partial();

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: commonSchema,
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: commonSchema,
});

const sold = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sold' }),
  schema: commonSchema,
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: commonSchema,
});

export const collections = {
  news,
  work,
  sold,
  pages,
};
