'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

import { ProjectType, projectSchema } from './schema';

export default async function AddProjectInfo(formData: ProjectType) {
  const session = await getServerSession();
  const validatedFields = projectSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  await prisma.project.create({
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
