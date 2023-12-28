import React from 'react';

import { Folder } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import EmptyState from '@/components/shared/empty-state';
import prisma from '@/prisma';

import ProjectForm from './components/form';
import ProjectList from './components/project-list';

import SectionHeading from '../components/section-heading';

async function getProjectData() {
  const session = await getServerSession();
  return prisma.project.findMany({
    where: {
      userEmail: session?.user?.email!,
    },
  });
}
const ProjectPage = async () => {
  const projects = await getProjectData();
  const sortedProjects = projects?.sort(
    (a, b) => new Date(b.end ?? '').getTime() - new Date(a.end ?? '').getTime()
  );

  if (!sortedProjects?.length) {
    return (
      <EmptyState
        icon={<Folder className='h-12 w-12' />}
        title='No projects added yet!'
        description='Add your projects to showcase your work.'
      >
        <ProjectForm />
      </EmptyState>
    );
  }

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Educational Information'
        description='Add your educational information.'
      />
      <ProjectList items={sortedProjects} />
      <Flex justify='center'>
        <ProjectForm />
      </Flex>
    </Box>
  );
};

ProjectPage.displayName = 'ProjectPage';
export default ProjectPage;
