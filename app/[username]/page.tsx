import React from 'react';

import type { Metadata, ResolvingMetadata } from 'next';

import { siteConfig } from '@/config/site';
import prisma from '@/prisma';

import Resume from './resume';
import { UserData } from './type';

export async function getUserData(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      personalInfo: true,
      experiences: true,
      educations: true,
      skills: true,
      projects: true,
    },
  });
  await prisma.analytics.update({
    where: {
      userEmail: user?.email!,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });
  return user;
}

export async function generateMetadata(
  { params }: { params: { username: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const username = params.username;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      name: true,
      bio: true,
    },
  });

  return {
    title: user?.name! + ' | ' + siteConfig.name,
    description: user?.bio,
  };
}

const ResumePage = async ({ params }: { params: { username: string } }) => {
  const userData = (await getUserData(params.username)) as UserData;

  return userData && <Resume userData={userData} />;
};

ResumePage.displayName = 'ResumePage';
export default ResumePage;
