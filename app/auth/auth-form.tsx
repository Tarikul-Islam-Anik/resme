'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Grid } from '@/components/layout/grid';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import createUser from './action';
import { authSchema, AuthSchemaType } from './schema';

interface AuthFormProps {
  method: 'signin' | 'signup';
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm = ({ method, setToggle }: AuthFormProps) => {
  const form = useForm<AuthSchemaType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  async function onSubmit(formData: AuthSchemaType) {
    if (method === 'signin') {
      signIn('credentials', {
        email: formData.email,
        password: formData.password,
        callbackUrl: '/dashboard',
      }).then(() => setToggle((toggle) => !toggle));
    } else {
      toast.promise(createUser(formData), {
        loading: 'Creating an account...',
        success: 'Account created successfully. Please sign in.',
        error: 'This email may already exist. Consider signing in.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='my-4'>
        <Grid cols={1} gapY={4}>
          {method === 'signup' && (
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='capitalize'>{field.name}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {['email', 'password'].map((item) => (
            <FormField
              key={item}
              control={form.control}
              name={item as 'email' | 'password'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='capitalize'>{field.name}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </Grid>
        <Button type='submit' className='mt-4 w-full'>
          {method === 'signin' ? 'Sign in' : 'Sign up'}
        </Button>
      </form>
    </Form>
  );
};

AuthForm.displayName = 'AuthForm';
export default AuthForm;
