import { Skill } from '@prisma/client';

import { Flex } from '@/components/layout/flex';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserSkillSCard = ({ skills }: { skills: Skill[] }) => {
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Flex wrap='wrap' gap={2}>
          {skills
            ? Object.values(skills).map((skill, index) => (
                <Badge key={index} variant='secondary' className='text-sm'>
                  {skill.name}
                </Badge>
              ))
            : null}
        </Flex>
      </CardContent>
    </Card>
  );
};

UserSkillSCard.displayName = 'UserSkillSCard';
export default UserSkillSCard;
