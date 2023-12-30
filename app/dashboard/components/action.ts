'use server';

import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

export default async function getUserData() {
  const session = await getServerSession();
  return prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });
}
