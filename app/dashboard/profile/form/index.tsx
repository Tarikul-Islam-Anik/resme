'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { uploadImage } from '@/lib/utils';

import UpdateProfileInfo from './action';
import ProfileFormFields from './fields';
import { ProfileDataType, profileSchema } from './schema';

const ProfileForm = ({ user }: { user: User }) => {
  const defaultValues: Partial<ProfileDataType> = {
    name: user.name ?? '',
    email: user.email ?? '',
    username: user.username ?? '',
    bio: user.bio ?? '',
    image: user.image ?? '',
    coverImage: user.coverImage ?? '',
  };

  const form = useForm<ProfileDataType>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function onSubmit(formData: ProfileDataType) {
    if (formData.image) {
      formData.image = await uploadImage(formData.image);
    }

    if (formData.coverImage) {
      formData.coverImage = await uploadImage(formData.coverImage);
    }

    toast.promise(UpdateProfileInfo(formData), {
      loading: 'Updating profile...',
      success: 'Profile updated successfully',
      error: 'Something went wrong',
    });
  }

  const isDisabled =
    Object.keys(form.formState.dirtyFields).length === 0 ||
    !form.formState.isValid ||
    form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='p-2'>
        <ProfileFormFields form={form} />
        <Button type='submit' disabled={isDisabled} className='mt-8'>
          Update
        </Button>
      </form>
    </Form>
  );
};

ProfileForm.displayName = 'ProfileForm';
export default ProfileForm;
