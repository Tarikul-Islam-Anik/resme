import { Box } from '@/components/layout/box';

import ProfileForm from './form';

import getUserData from '../components/action';
import SectionHeading from '../components/section-heading';

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
