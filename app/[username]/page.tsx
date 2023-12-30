import React from 'react';

import type { Metadata, ResolvingMetadata } from 'next';

import { siteConfig } from '@/config/site';
import prisma from '@/prisma';

import { getResumeData } from './action';
import Resume from './resume';
import { UserData } from './type';

async function UpdateClicks(user: UserData) {
  if (user?.analytics) {
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
  } else {
    await prisma.analytics.create({
      data: {
        userEmail: user?.email!,
        clicks: 1,
      },
    });
  }
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
  const userData = (await getResumeData(params.username)) as UserData;

  if (userData) {
    UpdateClicks(userData);
  }
  return userData && <Resume userData={userData} />;
};

ResumePage.displayName = 'ResumePage';
export default ResumePage;
