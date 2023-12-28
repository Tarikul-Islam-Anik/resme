import { cn } from '@/lib/utils';

import { Box } from '../layout/box';
import { Flex } from '../layout/flex';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const EmptyState = ({
  icon,
  title,
  description,
  children,
  className,
}: EmptyStateProps) => {
  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      className={cn('h-96', className)}
    >
      <Box mx={'auto'} className='text-gray-500'>
        {icon}
      </Box>
      <Heading size='sm' weight='semibold' className='mt-1'>
        {title}
      </Heading>
      <Text
        as='p'
        size='sm'
        align='center'
        className='mt-0.5 text-muted-foreground'
      >
        {description}
      </Text>
      <Box mt={4}>{children}</Box>
    </Flex>
  );
};

EmptyState.displayName = 'EmptyState';

export default EmptyState;
