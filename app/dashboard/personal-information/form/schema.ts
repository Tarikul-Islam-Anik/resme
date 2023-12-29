import * as z from 'zod';

export const personalInfoSchema = z.object({
  phone: z.string(),
  address: z.string(),
  website: z.string(),
  dob: z.string().refine(
    (val) => {
      const date = new Date(val);
      return !isNaN(date.getTime());
    },
    {
      message: 'Invalid date format',
    }
  ),

  gender: z.string({
    required_error: 'Please select a gender.',
  }),

  country: z.string({
    required_error: 'Please select a country.',
  }),

  about: z
    .string({ required_error: 'About is required.' })
    .max(1001, { message: 'About must not be longer than 1000 characters.' }),

  experience: z.string(),
});

export type PersonalInfoType = z.infer<typeof personalInfoSchema>;
