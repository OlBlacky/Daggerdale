import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chronicle = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/chronicle' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    chapterTitle: z.string(),
    order: z.number(),
  }),
});

const appendix = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/appendix' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number().optional(),
    chapterTitle: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { chronicle, appendix };
