'use client';

import React from 'react';

import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';

const SignoutButton = () => {
  return (
    <Button className='mt-4' onClick={() => signOut()}>
      Logout
    </Button>
  );
};

SignoutButton.displayName = 'SignoutButton';
export default SignoutButton;
