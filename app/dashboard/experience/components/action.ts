'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

export default async function DeleteExperienceInfo(company: string) {
  const session = await getServerSession();

  await prisma.experience.delete({
    where: {
      company_userEmail: {
        company,
        userEmail: session?.user?.email!,
      },
    },
  });
  revalidatePath('/dashboard/experience');
}
