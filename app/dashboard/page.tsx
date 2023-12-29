import React from 'react';

import { Section } from '@/components/layout/section';

import DeleteAccount from './components/delete-account';
import SectionHeading from './components/section-heading';
import SignoutButton from './components/signout-button';
import ThemeSelect from './components/theme-select';

const DashBoardPage = async () => {
  return (
    <Section className='py-0'>
      <SectionHeading
        title='Theme'
        description='Change appearance based on your preferences.'
      />
      <ThemeSelect />
      <SectionHeading title='Account' description='Manage your account.' />
      <DeleteAccount />
      <SignoutButton />
    </Section>
  );
};

DashBoardPage.displayName = 'DashBoardPage';
export default DashBoardPage;
