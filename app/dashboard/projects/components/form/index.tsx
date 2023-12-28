'use client';
import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Flex } from '@/components/layout/flex';
import FormDialog from '@/components/shared/form-dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import ProjectFormFields from './fields';
import { projectSchema, ProjectType } from './schema';
import AddProjectInfo from './action';

const ProjectForm = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<ProjectType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: '',
      desc: '',
      website: '',
      start: '',
      end: '',
    },
  });
  function onSubmit(formData: ProjectType) {
    toast.promise(AddProjectInfo(formData), {
      loading: 'Adding project...',
      success: () => {
        setOpen(false);
        return 'Project added successfully!';
      },
      error: (err) => err.message,
    });
  }
  return (
    <FormDialog
      title='Project'
      description='Add your project.'
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ProjectFormFields form={form} />
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

ProjectForm.displayName = 'ProjectForm';
export default ProjectForm;
