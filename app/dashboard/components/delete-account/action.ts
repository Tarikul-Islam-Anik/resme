'use server';

import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

export default async function deleteUser() {
  const session = await getServerSession();
  const user = await prisma.user.delete({
    where: {
      email: session?.user?.email!,
    },
  });

  return user;
}
