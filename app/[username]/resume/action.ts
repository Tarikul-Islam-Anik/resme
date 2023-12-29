'use server';

import prisma from '@/prisma';

export default async function UpdateDownloadCount(email: string) {
  await prisma.analytics.update({
    where: {
      userEmail: email,
    },
    data: {
      downloads: {
        increment: 1,
      },
    },
  });
  return true;
}
