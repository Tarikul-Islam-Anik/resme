import { useMemo, useState } from 'react';

import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn, getCountries } from '@/lib/utils';

const SelectCountry = ({ form }: { form: any }) => {
  const [open, setOpen] = useState(false);

  const countries = useMemo(() => getCountries(), []);

  return (
    <FormField
      control={form.control}
      name='country'
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>Country</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  role='combobox'
                  className={cn(
                    'w-[249px] justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? Object.values(countries).find(
                        (country) => country === field.value
                      )
                    : 'Select country'}
                  <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-[249px] p-0'>
              <Command>
                <CommandInput placeholder='Search country...' />
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  <ScrollArea className='h-48'>
                    {Object.entries(countries).map(([key, value]) => (
                      <CommandItem
                        value={value}
                        key={key}
                        onSelect={() => {
                          form.setValue('country', value);
                          setOpen(false);
                        }}
                        className='line-clamp-1'
                      >
                        {value}
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

SelectCountry.displayName = 'SelectCountry';
export default SelectCountry;
