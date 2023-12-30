'use server';

import prisma from '@/prisma';

export async function getResumeData(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      analytics: true,
      personalInfo: true,
      experiences: true,
      educations: true,
      skills: true,
      projects: true,
    },
  });

  return user;
}
