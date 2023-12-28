import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const SelectGender = ({ form }: { form: any }) => {
  return (
    <FormField
      control={form.control}
      name='gender'
      render={({ field }) => (
        <FormItem className='flex flex-col space-y-3'>
          <FormLabel>Gender</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex items-center space-x-1'
            >
              {['male', 'female'].map((item) => (
                <FormItem
                  className='flex items-center space-x-2 space-y-0'
                  key={item}
                >
                  <FormControl>
                    <RadioGroupItem value={item} />
                  </FormControl>
                  <FormLabel className='font-normal capitalize'>
                    {item}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

SelectGender.displayName = 'SelectGender';
export default SelectGender;
