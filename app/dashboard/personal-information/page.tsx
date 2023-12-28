import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import prisma from '@/prisma';

import PersonalInfoForm from './form';

import SectionHeading from '../components/section-heading';

async function getUserPersonalInfoData() {
  const session = await getServerSession();
  return prisma.personalInfo.findUnique({
    where: {
      userEmail: session?.user?.email!,
    },
  });
}

export default async function PersonalInformationPage() {
  const personalInfo = await getUserPersonalInfoData();

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Personal Information'
        description='Your personal information is not publicly visible but recuiters can see it when you apply for a job.'
      />
      <PersonalInfoForm personalInfo={personalInfo} />
    </Box>
  );
}

PersonalInformationPage.displayName = 'PersonalInformationPage';
