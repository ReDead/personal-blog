import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({
		base: './src/content/projects', 
		pattern: '**/*.{md,mdx}',
		generateId: ({ entry }) => {
			return entry.replace(/\/index\.md$/, "");
		}
	}),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const adventures = defineCollection({
	// Load Markdown and MDX files in the `src/content/adventures/` directory.
	loader: glob({
		base: './src/content/adventures', 
		pattern: '**/*.{md,mdx}',
		generateId: ({ entry }) => {
			return entry.replace(/\/index\.md$/, "");
		}
	}),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { projects, adventures };
