import { User } from '@prisma/client';
import Image from 'next/image';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardHeader } from '@/components/ui/card';
import { Card, CardContent } from '@/components/ui/card';
import { getInitials } from '@/lib/utils';

import DownloadResume from './download-resume';

const UserMediaCard = ({
  name,
  image,
  coverImage,
  bio,
  email,
  resumePdfDownloadLink,
}: Partial<User>) => {
  return (
    <Card className='isolate h-auto overflow-hidden shadow-none'>
      <UserMedia name={name!} image={image!} coverImage={coverImage!} />
      <CardContent className='mt-12 w-full px-0'>
        <Flex align='center' justify='center' direction='column' px={4}>
          <Heading size='lg' as='h2' weight='medium'>
            {name}
          </Heading>
          <Text
            as='p'
            size='xs'
            align='center'
            className='line-clamp-3 text-muted-foreground'
          >
            {bio ?? 'No bio provided'}
          </Text>
          <DownloadResume email={email!} link={resumePdfDownloadLink!} />
        </Flex>
      </CardContent>
    </Card>
  );
};

UserMediaCard.displayName = 'UserMediaCard';
export default UserMediaCard;

const UserMedia = ({ name, image, coverImage }: Partial<User>) => {
  return (
    <CardHeader className='relative p-0 pb-4'>
      <Box className='h-28'>
        {coverImage && (
          <Image
            width={256}
            height={50}
            alt={name + ' cover image'}
            src={coverImage ?? ''}
            className='h-28 w-full object-cover'
            priority
          />
        )}
      </Box>
      <Box
        position='absolute'
        className='-bottom-8 left-1/2 -translate-x-1/2  transform rounded-full border-2 border-muted'
      >
        <Avatar className='h-24 w-24'>
          <AvatarImage src={image ?? ''} alt={name + ' profile image'} />
          <AvatarFallback className='h-24 w-24'>
            {getInitials(name ? name : '')}
          </AvatarFallback>
        </Avatar>
      </Box>
    </CardHeader>
  );
};
