import * as React from 'react';

import { PlusIcon } from 'lucide-react';

import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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

import { Box } from '../layout/box';

interface FormDialog {
  title: string;
  description: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const FormDialog = ({
  title,
  description,
  open,
  setOpen,
  children,
}: FormDialog) => {
  const { isDesktop } = useMediaQuery();

  const addBtn = (
    <Button variant='outline'>
      <PlusIcon className='mr-1 h-5 w-5' />
      <Text>Add</Text>
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{addBtn}</DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{addBtn}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <Box className='z-10 px-4'>{children}</Box>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

FormDialog.displayName = 'FormDialog';
export default FormDialog;
