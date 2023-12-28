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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { ExperienceType } from './schema';

const ExperienceFormFields = ({
  form,
}: {
  form: UseFormReturn<ExperienceType>;
}) => {
  return (
    <Flex direction='column' gap={4}>
      {['position', 'company', 'desc', 'start', 'end'].map((item, index) => (
        <FormField
          key={index}
          control={form.control}
          name={item as keyof ExperienceType}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='capitalize'>{item}</FormLabel>
              <FormControl>
                {item === 'desc' ? (
                  <Textarea rows={4} {...field} />
                ) : (
                  <Input
                    {...field}
                    {...(item === 'end' || item === 'start'
                      ? { placeholder: 'DD MMM, YYYY' }
                      : {})}
                  />
                )}
              </FormControl>
              {(item === 'end' || item === 'start') && (
                <FormDescription>Example: 12 Jan, 1990</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <FormField
        control={form.control}
        name='type'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Select job type' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value='FULL_TIME'>Full time</SelectItem>
                <SelectItem value='PART_TIME'>Part time</SelectItem>
                <SelectItem value='CONTRACT'>Contract</SelectItem>
                <SelectItem value='INTERNSHIP'>Internship</SelectItem>
                <SelectItem value='TEMPORARY'>Temporary</SelectItem>
                <SelectItem value='OTHER'>Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </Flex>
  );
};

ExperienceFormFields.displayName = 'ExperienceInfoFormFields';
export default ExperienceFormFields;
