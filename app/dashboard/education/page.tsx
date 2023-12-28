import React from 'react';

import { GraduationCap } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import EmptyState from '@/components/shared/empty-state';
import prisma from '@/prisma';

import EducationList from './components/education-list';
import EducationalInfoForm from './components/form';

import SectionHeading from '../components/section-heading';

async function getEducationData() {
  const session = await getServerSession();
  return prisma.education.findMany({
    where: {
      userEmail: session?.user?.email!,
    },
  });
}
const DashBoardPage = async () => {
  const education = await getEducationData();
  const sortedEducation = education?.sort(
    (a, b) => new Date(b.end ?? '').getTime() - new Date(a.end ?? '').getTime()
  );

  if (!sortedEducation?.length) {
    return (
      <EmptyState
        icon={<GraduationCap className='h-12 w-12' />}
        title='No academic information added yet'
        description='Add your relevant academic information to your resume.'
      >
        <EducationalInfoForm />
      </EmptyState>
    );
  }

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Educational Information'
        description='Add your educational information.'
      />
      <EducationList items={sortedEducation} />
      <Flex justify='center'>
        <EducationalInfoForm />
      </Flex>
    </Box>
  );
};

export default DashBoardPage;
