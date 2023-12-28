'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

export default async function DeleteProjectInfo(name: string) {
  const session = await getServerSession();

  await prisma.project.delete({
    where: {
      name_userEmail: {
        name,
        userEmail: session?.user?.email!,
      },
    },
  });
  revalidatePath('/dashboard/projects');
}
