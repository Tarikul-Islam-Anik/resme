'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

export default async function DeleteEducationInfo(school: string) {
  const session = await getServerSession();

  await prisma.education.delete({
    where: {
      school_userEmail: {
        school,
        userEmail: session?.user?.email!,
      },
    },
  });
  revalidatePath('/dashboard/education');
}
