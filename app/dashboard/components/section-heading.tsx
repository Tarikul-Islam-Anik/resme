import { Box } from '@/components/layout/box';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Separator } from '@/components/ui/separator';

const SectionHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box>
      <Heading as='h3' className='text-lg font-medium'>
        {title}
      </Heading>
      <Text as='p' className='text-sm text-muted-foreground'>
        {description}
      </Text>
      <Separator className='mt-6' />
    </Box>
  );
};

SectionHeading.displayName = 'SectionHeading';
export default SectionHeading;
