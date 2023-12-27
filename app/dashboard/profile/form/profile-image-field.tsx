import { UseFormReturn } from 'react-hook-form';

import { Flex } from '@/components/layout/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getInitials } from '@/lib/utils';

import { ProfileDataType } from './schema';

const ProfileImageField = ({
  form,
}: {
  form: UseFormReturn<ProfileDataType>;
}) => {
  return (
    <FormField
      control={form.control}
      name='image'
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem className='col-span-full'>
          <FormLabel>Profile Picture</FormLabel>
          <FormControl>
            <Flex mt={2} align='center' gap={4}>
              <Avatar className='h-12 w-12'>
                <AvatarImage
                  src={
                    typeof value === 'object'
                      ? URL.createObjectURL(value)
                      : value
                  }
                />
                <AvatarFallback className='h-12 w-12'>
                  {getInitials(form.getValues('name'))}
                </AvatarFallback>
              </Avatar>
              <Button variant='outline' asChild>
                <Label htmlFor='image'>
                  <Input
                    id='image'
                    type='file'
                    className='sr-only'
                    placeholder='Upload a file'
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        onChange(file);
                      }
                    }}
                    {...field}
                  />
                  Change
                </Label>
              </Button>
            </Flex>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

ProfileImageField.displayName = 'ProfileImageField';
export default ProfileImageField;
