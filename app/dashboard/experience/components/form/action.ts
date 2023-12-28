'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

import { experienceSchema, ExperienceType } from './schema';

export default async function AddExperienceInfo(formData: ExperienceType) {
  const session = await getServerSession();
  const validatedFields = experienceSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  await prisma.experience.create({
    data: {
      ...validatedFields.data,
      user: {
        connect: {
          email: session?.user?.email!,
        },
      },
    },
  });
  revalidatePath('/dashboard/experience');
}
