'use client';

import { useState } from 'react';

import { signIn } from 'next-auth/react';

import { Box } from '@/components/layout/box';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';

import AuthForm from './auth-form';
import Logo from '@/components/shared/logo';

export default function AuthPage() {
  const [toggle, setToggle] = useState(true);
  return (
    <Container className='w-full max-w-sm'>
      <Box className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Logo className='mx-auto h-12 w-12 rounded-md' />
        <Heading align='center' size='2xl' weight='bold' className='mt-6'>
          {toggle ? 'Sign in to your account' : 'Create an account'}
        </Heading>
      </Box>
      <AuthForm method={toggle ? 'signin' : 'signup'} setToggle={setToggle} />
      <Box className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Button
          variant='outline'
          className='w-full'
          onClick={() =>
            signIn('google', {
              callbackUrl: '/dashboard',
            })
          }
        >
          Continue with Google
        </Button>
        <Text as='p' size='sm' align='center' className='mt-4 text-gray-500'>
          {toggle ? 'New to us?' : 'Already have an account?'}
          <Button
            variant='link'
            className='pl-1'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? 'Create an account' : 'Sign in'}
          </Button>
        </Text>
      </Box>
    </Container>
  );
}

AuthPage.displayName = 'AuthPage';
