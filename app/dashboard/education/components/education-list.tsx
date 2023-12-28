'use client';

import { Education } from '@prisma/client';
import { toast } from 'sonner';

import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import DeleteEducationInfo from './action';

const EducationList = ({ items }: { items: Education[] }) => {
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

EducationList.displayName = 'EducationList';
export default EducationList;

const Item = ({ item }: { item: Education }) => {
  return (
    <Flex align='center' justify='between'>
      <Flex direction='column' className='w-5/6 space-y-0.5'>
        <Heading as='h4' weight='medium'>
          {item.school}
        </Heading>
        <Text as='p' size='sm' className='line-clamp-3'>
          {item.field}
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

        <Text as='p' size='sm'>
          Grade: <Text>{item.grade}</Text>
        </Text>
      </Flex>
      <RemoveItem school={item.school} />
    </Flex>
  );
};

const RemoveItem = ({ school }: { school: string }) => {
  function handleDelete() {
    toast.promise(DeleteEducationInfo(school), {
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
