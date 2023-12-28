'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

import { educationInfoSchema, EducationInfoType } from './schema';

export default async function AddEducationInfo(formData: EducationInfoType) {
  const session = await getServerSession();
  const validatedFields = educationInfoSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  await prisma.education.create({
    data: {
      ...validatedFields.data,
      user: {
        connect: {
          email: session?.user?.email!,
        },
      },
    },
  });
  revalidatePath('/dashboard/education');
}
