'use client';

import { Experience } from '@prisma/client';
import { toast } from 'sonner';

import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Strong } from '@/components/typography/strong';
import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import DeleteExperienceInfo from './action';

const ExperienceList = ({ items }: { items: Experience[] }) => {
  return (
    <ul role='list'>
      {items.map((item, index) => (
        <li key={index}>
          {index !== 0 && <Separator className='my-4' />}
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

ExperienceList.displayName = 'ProjectList';
export default ExperienceList;

const Item = ({ item }: { item: Experience }) => {
  return (
    <Flex align='center' justify='between'>
      <Flex direction='column' className='w-5/6 space-y-0.5'>
        <Heading as='h4' weight='medium'>
          <Strong>{item.position}</Strong>
          at {item.company}
        </Heading>
        <Text as='p' size='sm' className='line-clamp-3'>
          {item.desc}
        </Text>
        <Text size='sm' className='text-muted-foreground'>
          <time dateTime={new Date(item.start).toISOString().split('T')[0]}>
            {item.start}
          </time>{' '}
          -{' '}
          <time dateTime={new Date(item.end ?? '').toISOString().split('T')[0]}>
            {item.end}
          </time>
        </Text>
      </Flex>
      <RemoveItem company={item.company} />
    </Flex>
  );
};

const RemoveItem = ({ company }: { company: string }) => {
  function handleDelete() {
    toast.promise(DeleteExperienceInfo(company), {
      loading: 'Removing educational information...',
      success: 'Information removed successfully!',
      error: (err) => {
        return err.message;
      },
    });
  }
  return (
    <form onSubmit={handleDelete}>
      <Button variant='secondary' size='sm' type='submit'>
        Remove
      </Button>
    </form>
  );
};
