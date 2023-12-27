import * as z from 'zod';

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      message: 'Name must be at least 2 characters long',
    })
    .max(50, {
      message: 'Name must not be longer than 50 characters.',
    })
    .optional(),
  email: z
    .string()
    .email({
      message: 'Invalid email.',
    })
    .optional(),
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    })
    .regex(/^[a-z0-9_-]+$/, {
      message:
        'Username must only contain lowercase alphanumeric characters, underscore, and hyphen.',
    })
    .optional(),

  bio: z
    .string()
    .trim()
    .min(1, {
      message: 'Bio must be at least 1 characters long',
    })
    .max(101, {
      message: 'Bio must not be longer than 101 characters.',
    })
    .optional(),
  image: z.string().or(z.any()).optional(),
  coverImage: z.string().or(z.any()).optional(),
});

export type ProfileDataType = z.infer<typeof profileSchema>;
