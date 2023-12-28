import z from 'zod';

export const projectSchema = z.object({
  name: z.string().max(101),
  desc: z.string().max(1000),
  website: z.string().max(100).optional(),
  start: z.string(),
  end: z.string(),
});

export type ProjectType = z.infer<typeof projectSchema>;
