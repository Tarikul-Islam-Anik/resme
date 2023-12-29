import { ImagePlus } from 'lucide-react';
import Image from 'next/legacy/image';
import { UseFormReturn } from 'react-hook-form';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
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
import { cn } from '@/lib/utils';

import { ProfileDataType } from './schema';

const CoverImageField = ({
  form,
}: {
  form: UseFormReturn<ProfileDataType>;
}) => {
  return (
    <FormField
      control={form.control}
      name='coverImage'
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem className='col-span-full'>
          <FormLabel>Cover photo</FormLabel>
          <FormControl>
            <Flex
              justify='center'
              className={cn(
                form.getValues('coverImage') === '' &&
                  'border-muted-2 border-2 border-dashed',
                'relative overflow-hidden rounded-xl'
              )}
            >
              {form.getValues('coverImage') === '' ? (
                <Flex align='center' justify='center' direction='column' py={8}>
                  <ImagePlus
                    className='mx-auto h-12 w-12 text-muted-foreground'
                    aria-hidden='true'
                  />
                  <Flex
                    mt={4}
                    align='center'
                    justify='center'
                    gap={4}
                    className='text-sm leading-6 text-muted-foreground'
                  >
                    <Button variant='outline' asChild>
                      <Label htmlFor='coverImage'>
                        <Input
                          id='coverImage'
                          type='file'
                          className='sr-only'
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...field}
                        />
                        Select a cover photo
                      </Label>
                    </Button>
                  </Flex>
                  <Text as='p' size='xs' className='mt-2 text-muted-foreground'>
                    PNG, JPG, GIF up to 5MB. Recommended size: 1500x500 pixels
                  </Text>
                </Flex>
              ) : (
                <Box className='w-[1500px]'>
                  <Image
                    src={
                      (typeof value === 'object'
                        ? URL.createObjectURL(value)
                        : value) ?? ''
                    }
                    alt='Cover photo'
                    width={1500}
                    height={500}
                    layout='responsive'
                    className='w-full rounded-xl'
                  />
                  <Button
                    variant='secondary'
                    size='sm'
                    className='absolute right-4 top-4'
                    onClick={() => onChange('')}
                  >
                    Remove
                  </Button>
                </Box>
              )}
            </Flex>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

CoverImageField.displayName = 'CoverImageField';
export default CoverImageField;
