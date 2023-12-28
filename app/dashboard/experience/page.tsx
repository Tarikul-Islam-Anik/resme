import { Star } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import EmptyState from '@/components/shared/empty-state';
import prisma from '@/prisma';

import ExperienceList from './components/experience-list';
import ExperienceForm from './components/form';

import SectionHeading from '../components/section-heading';

async function getExperienceData() {
  const session = await getServerSession();
  return prisma.experience.findMany({
    where: {
      userEmail: session?.user?.email!,
    },
  });
}

export default async function ExperiencePage() {
  const experiences = await getExperienceData();

  const sortedExperiences = experiences?.sort(
    (a, b) => new Date(b.end ?? '').getTime() - new Date(a.end ?? '').getTime()
  );

  if (!sortedExperiences?.length) {
    return (
      <EmptyState
        icon={<Star className='h-12 w-12' />}
        title='No experience information added yet!'
        description='Add your experience information to get started.'
      >
        <ExperienceForm />
      </EmptyState>
    );
  }

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Educational Information'
        description='Add your educational information.'
      />
      <ExperienceList items={sortedExperiences} />
      <Flex justify='center'>
        <ExperienceForm />
      </Flex>
    </Box>
  );
}

ExperiencePage.displayName = 'ExperiencePage';
