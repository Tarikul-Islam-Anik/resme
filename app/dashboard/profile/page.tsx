import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import prisma from '@/prisma';

import ProfileForm from './form';

import SectionHeading from '../components/section-heading';

async function getUserData() {
  const session = await getServerSession();
  return prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });
}

export default async function ProfilePage() {
  const user = await getUserData();

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Profile'
        description='This information will be displayed publicly so be careful what you share.'
      />
      {user && <ProfileForm user={user} />}
    </Box>
  );
}

ProfilePage.displayName = 'ProfilePage';
