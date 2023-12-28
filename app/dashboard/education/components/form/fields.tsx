import { UseFormReturn } from 'react-hook-form';

import { Flex } from '@/components/layout/flex';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { EducationInfoType } from './schema';

const EducationFormFields = ({
  form,
}: {
  form: UseFormReturn<EducationInfoType>;
}) => {
  return (
    <Flex direction='column' gap={4}>
      {['school', 'degree', 'field', 'grade', 'start', 'end'].map(
        (item, index) => (
          <FormField
            key={index}
            control={form.control}
            name={item as keyof EducationInfoType}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='capitalize'>{item}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...(item === 'end' || item === 'start'
                      ? { placeholder: 'DD MMM, YYYY' }
                      : {})}
                  />
                </FormControl>
                {(item === 'end' || item === 'start') && (
                  <FormDescription>Example: 12 Jan, 1990</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        )
      )}
    </Flex>
  );
};

EducationFormFields.displayName = 'EducationFormFields';
export default EducationFormFields;
