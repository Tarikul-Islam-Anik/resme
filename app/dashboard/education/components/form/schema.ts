import z from 'zod';

export const educationInfoSchema = z.object({
  school: z
    .string()
    .trim()
    .min(1, {
      message: 'School name is required',
    })
    .max(101, {
      message: 'School name must be less than 101 characters',
    }),
  degree: z
    .string()
    .trim()
    .min(3, {
      message: 'Degree name is must be more than 3 characters',
    })
    .max(51, {
      message: 'Degree name must be less than 51 characters',
    }),
  field: z
    .string()
    .trim()
    .min(3, {
      message: 'Field name is must be more than 3 characters',
    })
    .max(51, {
      message: 'Field name must be less than 51 characters',
    }),
  grade: z.string().refine(
    (val) => {
      const grades = parseFloat(val);
      return !isNaN(grades) && grades >= 0 && grades <= 4.0;
    },
    {
      message: 'Invalid grade',
    }
  ),
  start: z.string().refine(
    (val) => {
      const date = new Date(val);
      return !isNaN(date.getTime());
    },
    {
      message: 'Invalid date format',
    }
  ),
  end: z.string().refine(
    (val) => {
      const date = new Date(val);
      return !isNaN(date.getTime());
    },
    {
      message: 'Invalid date format',
    }
  ),
});

export type EducationInfoType = z.infer<typeof educationInfoSchema>;
