import { z } from 'zod';

export const authSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters long',
    })
    .max(50, {
      message: 'Name must be at most 50 characters long',
    }),
  email: z
    .string({
      invalid_type_error: 'Invalid Email',
    })
    .email({
      message: 'Invalid Email',
    }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
});

export type AuthSchemaType = z.infer<typeof authSchema>;
