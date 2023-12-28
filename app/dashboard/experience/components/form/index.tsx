'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Flex } from '@/components/layout/flex';
import FormDialog from '@/components/shared/form-dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import AddExperienceInfo from './action';
import ExperienceFormFields from './fields';
import { experienceSchema, ExperienceType } from './schema';

const ExperienceForm = () => {
  const [open, setOpen] = useState(false);
  const defaultValues: Partial<ExperienceType> = {
    company: '',
    position: '',
    desc: '',
    type: '',
    start: '',
    end: '',
  };

  const form = useForm<ExperienceType>({
    resolver: zodResolver(experienceSchema),
    defaultValues,
    mode: 'onChange',
  });
  function onSubmit(formData: ExperienceType) {
    toast.promise(AddExperienceInfo(formData), {
      loading: 'Adding experience information...',
      success: () => {
        setOpen(false);
        return 'Information added successfully!';
      },
      error: 'Something went wrong!',
    });
  }
  return (
    <FormDialog
      title='Experience'
      description='Add your recent work experience.'
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ExperienceFormFields form={form} />
          <Flex
            direction='column'
            justify='end'
            my={4}
            gap={4}
            className='lg:mb-0 lg:flex-row-reverse'
          >
            <Button type='submit' className='w-full'>
              Add
            </Button>
            <Button
              type='button'
              className='w-full'
              variant='secondary'
              onClick={() => form.reset()}
            >
              Clear
            </Button>
          </Flex>
        </form>
      </Form>
    </FormDialog>
  );
};

ExperienceForm.displayName = 'ExperienceForm';
export default ExperienceForm;
