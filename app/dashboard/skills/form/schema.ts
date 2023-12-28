import z from 'zod';

export const skillschema = z.object({
  skills: z
    .array(
      z.object({
        value: z.string().max(100),
      })
    )
    .optional(),
});

export type SkillType = z.infer<typeof skillschema>;
