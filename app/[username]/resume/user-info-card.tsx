import { PersonalInfo } from '@prisma/client';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fallbackMessage, truncateString } from '@/lib/utils';

const UserInfoCard = ({ informations }: { informations: PersonalInfo }) => {
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent className='text-sm'>
        <DescriptionList>
          <Flex justify='between'>
            <DescriptionTerm>Email</DescriptionTerm>
            <DescriptionDetails>
              <a href={'mailto:' + informations.userEmail}>
                {fallbackMessage(informations.userEmail)}
              </a>
            </DescriptionDetails>
          </Flex>
          <Flex justify='between'>
            <DescriptionTerm>Phone</DescriptionTerm>
            <DescriptionDetails>
              <a href={'tel:' + informations.phone}>
                {fallbackMessage(informations.phone)}
              </a>
            </DescriptionDetails>
          </Flex>
          <Flex justify='between'>
            <DescriptionTerm>Experience</DescriptionTerm>
            <DescriptionDetails>
              {fallbackMessage(informations.experience + ' years')}
            </DescriptionDetails>
          </Flex>
          <Flex justify='between'>
            <DescriptionTerm>Gender</DescriptionTerm>
            <DescriptionDetails>{informations.gender}</DescriptionDetails>
          </Flex>
          <Flex justify='between'>
            <DescriptionTerm>Date of Birth</DescriptionTerm>
            <DescriptionDetails>{informations.dob}</DescriptionDetails>
          </Flex>{' '}
          <Flex justify='between'>
            <DescriptionTerm>Country</DescriptionTerm>
            <DescriptionDetails>{informations.country}</DescriptionDetails>
          </Flex>
          <Flex justify='between'>
            <DescriptionTerm>Address</DescriptionTerm>
            <DescriptionDetails>{informations.address}</DescriptionDetails>
          </Flex>
        </DescriptionList>
      </CardContent>
    </Card>
  );
};

UserInfoCard.displayName = 'StudentInfoCard';
export default UserInfoCard;

const DescriptionList = ({ children }: { children: React.ReactNode }) => {
  return <dl className='space-y-4'>{children}</dl>;
};

const DescriptionTerm = ({ children }: { children: React.ReactNode }) => {
  return <dt className='text-muted-foreground'>{children}</dt>;
};

const DescriptionDetails = ({ children }: { children: React.ReactNode }) => {
  return (
    <dd className='font-medium'>{truncateString(children as string, 25)}</dd>
  );
};
