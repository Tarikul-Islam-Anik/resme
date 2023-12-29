'use client';

import { useTheme } from 'next-themes';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  return (
    <RadioGroup
      className='grid max-w-md grid-cols-2 gap-8 pt-2'
      onValueChange={setTheme}
      value={theme}
    >
      <Label className='[&:has([data-state=checked])>div]:border-primary'>
        <RadioGroupItem value='light' className='sr-only' />

        <Box className='items-center rounded-md border-2 border-muted p-1 hover:border-accent'>
          <Box className='space-y-2 rounded-sm bg-[#ecedef] p-2'>
            <Box className='space-y-2 rounded-md bg-white p-2 shadow-sm'>
              <Box className='h-2 w-[80px] rounded-lg bg-[#ecedef]' />
              <Box className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
            </Box>
            <Flex
              align='center'
              className='space-x-2 rounded-md bg-white p-2 shadow-sm'
            >
              <Box className='h-4 w-4 rounded-full bg-[#ecedef]' />
              <Box className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
            </Flex>
            <Flex
              align='center'
              className='space-x-2 rounded-md bg-white p-2 shadow-sm'
            >
              <Box className='h-4 w-4 rounded-full bg-[#ecedef]' />
              <Box className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
            </Flex>
          </Box>
        </Box>
        <Text as='div' className='block w-full p-2 text-center font-normal'>
          Light
        </Text>
      </Label>

      <Label className='[&:has([data-state=checked])>div]:border-primary'>
        <RadioGroupItem value='dark' className='sr-only' />

        <Box className='items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground'>
          <Box className='space-y-2 rounded-sm bg-slate-950 p-2'>
            <Box className='space-y-2 rounded-md bg-slate-800 p-2 shadow-sm'>
              <Box className='h-2 w-[80px] rounded-lg bg-slate-400' />
              <Box className='h-2 w-[100px] rounded-lg bg-slate-400' />
            </Box>
            <Flex
              align='center'
              className='space-x-2 rounded-md bg-slate-800 p-2 shadow-sm'
            >
              <Box className='h-4 w-4 rounded-full bg-slate-400' />
              <Box className='h-2 w-[100px] rounded-lg bg-slate-400' />
            </Flex>
            <Flex
              align='center'
              className='space-x-2 rounded-md bg-slate-800 p-2 shadow-sm'
            >
              <Box className='h-4 w-4 rounded-full bg-slate-400' />
              <Box className='h-2 w-[100px] rounded-lg bg-slate-400' />
            </Flex>
          </Box>
        </Box>
        <Text as='div' className='block w-full p-2 text-center font-normal'>
          Dark
        </Text>
      </Label>
    </RadioGroup>
  );
};

ThemeSelect.displayName = 'ThemeSelect';
export default ThemeSelect;
