import { Experience } from '@prisma/client';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import ShowMore from '@/components/shared/show-more';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ExperienceCard = ({ experiences }: { experiences?: Experience[] }) => {
  const sortedExperiences = experiences?.sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  );
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <ul role='list'>
          {sortedExperiences?.length! > 0 ? (
            <>
              {sortedExperiences?.map((experience, index) => (
                <li key={experience.position}>
                  <Item experience={experience} />
                  {index !== sortedExperiences.length - 1 && (
                    <Separator className='my-4' />
                  )}
                </li>
              ))}
            </>
          ) : (
            <li>
              <Text
                as='p'
                size='sm'
                className='text-center text-muted-foreground'
              >
                No experience details has been added by the applicant.
              </Text>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

ExperienceCard.displayName = 'ExperienceCard';
export default ExperienceCard;

const Item = ({ experience }: { experience: Experience }) => {
  const { position, company, desc, type, start, end } = experience;
  return (
    <Box>
      <Heading as='h4' className='mb-1.5' weight='medium'>
        {position} at {company}
      </Heading>
      <Text as='p' size='sm' className='text-muted-foreground'>
        {desc ? <ShowMore text={desc} wordsDisplay={300} /> : 'No description'}
      </Text>
      <Flex className='justify-between' mt={4}>
        <Text as='p' size='sm' className='text-muted-foreground'>
          <Badge variant='outline' className='capitalize'>
            {type}
          </Badge>
        </Text>
        <Text as='p' size='sm' className='text-muted-foreground'>
          {start} - {end}
        </Text>
      </Flex>
    </Box>
  );
};
