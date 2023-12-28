import z from 'zod';

export const experienceSchema = z.object({
  company: z.string().max(101),
  desc: z.string(),
  position: z.string().max(51),
  type: z
    .string()
    .max(51)
    .or(
      z.enum([
        'FULL_TIME',
        'PART_TIME',
        'CONTRACT',
        'INTERNSHIP',
        'TEMPORARY',
        'OTHER',
      ])
    ),
  start: z.string(),
  end: z.string(),
});

export type ExperienceType = z.infer<typeof experienceSchema>;
