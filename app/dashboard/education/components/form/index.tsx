'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Flex } from '@/components/layout/flex';
import FormDialog from '@/components/shared/form-dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import AddEducationInfo from './action';
import EducationFormFields from './fields';
import { educationInfoSchema, EducationInfoType } from './schema';

const EducationalInfoForm = () => {
  const [open, setOpen] = useState(false);
  const defaultValues: Partial<EducationInfoType> = {
    school: '',
    degree: '',
    field: '',
    grade: '0.0',
  };

  const form = useForm<EducationInfoType>({
    resolver: zodResolver(educationInfoSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(formData: EducationInfoType) {
    toast.promise(AddEducationInfo(formData), {
      loading: 'Adding educational information...',
      success: () => {
        setOpen(false);
        return 'Information added successfully!';
      },
      error: (err) => {
        return err.message;
      },
    });
  }
  return (
    <FormDialog
      title='Educational Information'
      description='Add your educational information.'
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <EducationFormFields form={form} />
          <Flex
            direction='column'
            justify='end'
            my={4}
            gap={4}
            className=' lg:flex-row-reverse'
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

export default EducationalInfoForm;
