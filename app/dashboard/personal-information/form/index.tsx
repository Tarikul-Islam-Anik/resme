'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfo } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import UpdatePersonalInfo from './action';
import PersonalInfoFormFields from './fields';
import { personalInfoSchema, PersonalInfoType } from './schema';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo | null;
}

const PersonalInfoForm = ({ personalInfo }: PersonalInfoFormProps) => {
  const defaultValues: Partial<PersonalInfoType> = {
    phone: personalInfo?.phone ?? '',
    dob: personalInfo?.dob ?? '',
    gender: personalInfo?.gender ?? '',
    country: personalInfo?.country ?? '',
    address: personalInfo?.address ?? '',
    about: personalInfo?.about ?? '',
    experience: personalInfo?.experience ?? '0',
  };

  const form = useForm<PersonalInfoType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
    mode: 'onBlur',
  });

  async function onSubmit(formData: PersonalInfoType) {
    toast.promise(UpdatePersonalInfo(formData), {
      loading: 'Updating personal information...',
      success: 'Personal information updated!',
      error: 'Something went wrong',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='p-2'>
        <PersonalInfoFormFields form={form} />
        <Button type='submit' className='mt-8'>
          Update
        </Button>
      </form>
    </Form>
  );
};

PersonalInfoForm.displayName = 'PersonalInfoForm';
export default PersonalInfoForm;
