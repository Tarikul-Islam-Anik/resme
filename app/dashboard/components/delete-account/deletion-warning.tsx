'use client';

import React from 'react';

import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import deleteUser from './action';

interface DeleteAccountProps {
  children: React.ReactNode;
}
const DeletionWarning = ({ children }: DeleteAccountProps) => {
  const handleDeleteAccount = async () => {
    toast.promise(deleteUser(), {
      loading: 'Deleting account...',
      success: () => {
        signOut({
          callbackUrl: '/',
        });
        return 'Account deleted.';
      },
      error: 'Could not delete account.',
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete your account</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to delete your account? This action is permanent
          and cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form onSubmit={handleDeleteAccount}>
            <AlertDialogAction type='submit' className='w-full'>
              Delete
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

DeletionWarning.displayName = 'DeletionWarning';
export default DeletionWarning;
