import React from 'react';
import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import prisma from '@/prisma';

import SectionHeading from '../components/section-heading';
import SkillsForm from './form';

async function getSkillData() {
  const session = await getServerSession();
  return prisma.skill.findMany({
    where: {
      userEmail: session?.user?.email!,
    },
    select: {
      name: true,
    },
  });
}
const SkillsPage = async () => {
  const skills = await getSkillData();

  const data = skills.flatMap((item) => item.name);

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Skills'
        description='Showcase your skills to the world.'
      />
      <SkillsForm skills={data} />
    </Box>
  );
};

SkillsPage.displayName = 'SkillsPage';
export default SkillsPage;
