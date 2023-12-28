import { UseFormReturn } from 'react-hook-form';

import { Grid } from '@/components/layout/grid';
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

import { PersonalInfoType } from './schema';
import SelectCountry from './select-country';
import SelectGender from './select-gender';

const PersonalInfoFormFields = ({
  form,
}: {
  form: UseFormReturn<PersonalInfoType>;
}) => {
  return (
    <Grid cols={1} gapY={8}>
      <FormField
        control={form.control}
        name='about'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Textarea rows={4} maxLength={1000} {...field} />
            </FormControl>
            <FormDescription>
              Describe your professional experience, accomplishments, and
              skills.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='address'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>
              Your address will be visible in the resume.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='dob'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>Date of Birth</FormLabel>
            <FormControl>
              <Input maxLength={51} {...field} placeholder='DD MMM, YYYY' />
            </FormControl>
            <FormDescription>Example: 12 Jan, 1990</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <SelectGender form={form} />
      <FormField
        control={form.control}
        name='experience'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input
                type='number'
                min={0}
                max={10}
                {...field}
                className='[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
              />
            </FormControl>
            <FormDescription>
              How many years of experience do you have in your field?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='phone'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input maxLength={51} type='tel' {...field} />
            </FormControl>
            <FormDescription>
              Your phone number will be visible in the resume.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <SelectCountry form={form} />
    </Grid>
  );
};

PersonalInfoFormFields.displayName = 'PersonalInfoFormFields';
export default PersonalInfoFormFields;
