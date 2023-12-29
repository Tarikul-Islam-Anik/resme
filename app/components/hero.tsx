import Link from 'next/link';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { buttonVariants } from '@/components/ui/button';

import ActionBtn from './action-btn';

import { getUserData } from '../[username]/page';
import Resume from '../[username]/resume';
import { UserData } from '../[username]/type';

export default async function Hero() {
  const userData = (await getUserData('jcarter')) as UserData;
  return (
    <Box>
      <Box position='relative' pt={8} className='isolate'>
        <Box className='pb-4 pt-24'>
          <Box mx='auto' className='max-w-7xl px-6 lg:px-8'>
            <Box mx='auto' className='max-w-2xl text-center'>
              <Heading
                size='4xl'
                weight='bold'
                className='tracking-tight sm:text-6xl'
              >
                Create Beautiful Virtual Resumes in Seconds!
              </Heading>
              <Text as='p' size='lg' className='mt-4 text-muted-foreground'>
                Resme is a free resume builder that helps you create a beautiful
                looking resume online. Create an account fill in your details
                and share the link.
              </Text>
              <Flex mt={8} align='center' justify='center' gap={4}>
                <ActionBtn />
                <Link
                  href='/jcarter'
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  See Demo{' '}
                  <Text aria-hidden='true' className='ml-1.5'>
                    →
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box className='mt-16 flow-root'>
              <Box
                p={2}
                rounded='xl'
                className='-m-2 bg-slate-900/5 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-gray-50/5 dark:ring-gray-50/10'
              >
                <Resume userData={userData} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Hero.displayName = 'Hero';
