import { Education } from '@prisma/client';
import { GraduationCap } from 'lucide-react';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const EducationCard = ({ educations }: { educations?: Education[] }) => {
  const sortedEducations = educations?.sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  );
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Educations</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <ul role='list'>
          {sortedEducations?.length! > 0 ? (
            <>
              {sortedEducations?.map((education, index) => (
                <li key={education.grade}>
                  <Item education={education} />
                  {index !== sortedEducations.length - 1 && (
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
                No education details has been added by the applicant.
              </Text>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

EducationCard.displayName = 'StudentEducationCard';
export default EducationCard;

const Item = ({ education }: { education: Education }) => {
  const { degree, field, school, start, end } = education;
  return (
    <Box>
      <Heading as='h4' className='mb-1.5' weight='medium'>
        {degree}
      </Heading>
      <Text as='p' size='sm' className='text-muted-foreground'>
        {field}
      </Text>
      <Flex
        align='center'
        justify='between'
        mt={4}
        className='text-muted-foreground'
      >
        <Flex align='center' className='gap-1.5'>
          <Flex align='center' className='gap-1.5'>
            <GraduationCap size='16' />
            <Text as='p' size='sm' className='line-clamp-1'>
              {school}
            </Text>
          </Flex>
        </Flex>
        <Text as='p' size='sm' className='text-muted-foreground'>
          {start} - {end}
        </Text>
      </Flex>
    </Box>
  );
};
