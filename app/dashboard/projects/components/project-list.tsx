'use client';

import { Project } from '@prisma/client';
import { toast } from 'sonner';

import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import DeleteProjectInfo from './action';

const ProjectList = ({ items }: { items: Project[] }) => {
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

ProjectList.displayName = 'ProjectList';
export default ProjectList;

const Item = ({ item }: { item: Project }) => {
  return (
    <Flex align='center' justify='between'>
      <Flex direction='column' className='w-5/6 space-y-0.5'>
        <Heading as='h4' weight='medium'>
          {item.name}
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
      <RemoveItem name={item.name} />
    </Flex>
  );
};

const RemoveItem = ({ name }: { name: string }) => {
  function handleDelete() {
    toast.promise(DeleteProjectInfo(name), {
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
