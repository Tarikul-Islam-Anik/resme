'use client';

import React, { useState } from 'react';

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
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/use-media-query';

import deleteUser from './action';


interface DeleteAccountProps {
  children: React.ReactNode;
}
const DeletionWarning = ({ children }: DeleteAccountProps) => {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useMediaQuery();
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

  const title = 'Delete your account';
  const description =
    'Are you sure you want to delete your account? This action is permanent and cannot be undone.';

  if (isDesktop) {
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type='submit' asChild>
              <Button variant='destructive' onClick={handleDeleteAccount}>
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant='destructive' onClick={handleDeleteAccount}>
            Delete
          </Button>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DeletionWarning;
