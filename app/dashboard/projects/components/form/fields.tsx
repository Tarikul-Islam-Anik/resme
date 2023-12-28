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

import { ProjectType } from './schema';
import { Textarea } from '@/components/ui/textarea';

const ProjectFormFields = ({ form }: { form: UseFormReturn<ProjectType> }) => {
  return (
    <Flex direction='column' gap={4}>
      {['name', 'desc', 'website', 'start', 'end'].map((item, index) => (
        <FormField
          key={index}
          control={form.control}
          name={item as keyof ProjectType}
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
    </Flex>
  );
};

ProjectFormFields.displayName = 'ProjectFormFields';
export default ProjectFormFields;
