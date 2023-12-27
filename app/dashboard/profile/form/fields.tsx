import { UseFormReturn } from 'react-hook-form';

import { Grid } from '@/components/layout/grid';
import { Text } from '@/components/typography/text';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import CoverImageField from './cover-image-field';
import ProfileImageField from './profile-image-field';
import { ProfileDataType } from './schema';

const fields = [
  {
    name: 'name',
    description: 'To change your name, please contact support.',
  },
  {
    name: 'email',
    description: 'Your email address is the primary way we contact you.',
  },
  {
    name: 'username',
    description: 'Your resume URL will be: ',
  },
];

const ProfileFormFields = ({
  form,
}: {
  form: UseFormReturn<ProfileDataType>;
}) => {
  return (
    <Grid cols={1} gapY={8}>
      {fields.map((item) => (
        <FormField
          key={item.name}
          control={form.control}
          name={item.name as keyof ProfileDataType}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='capitalize'>{field.name}</FormLabel>
              <FormControl>
                <Input maxLength={50} {...field} />
              </FormControl>
              <FormDescription>
                {item.description}
                {item.name === 'username' && (
                  <Text className='font-semibold'>
                    https://resme.vercel.app/
                    {field.value ? field.value : 'username'}
                  </Text>
                )}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <FormField
        control={form.control}
        name='bio'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea maxLength={101} rows={4} {...field} />
            </FormControl>
            <FormDescription>
              Write a few sentences about yourself. Max 100 characters.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <ProfileImageField form={form} />
      <CoverImageField form={form} />
    </Grid>
  );
};

ProfileFormFields.displayName = 'ProfileFormFields';
export default ProfileFormFields;
