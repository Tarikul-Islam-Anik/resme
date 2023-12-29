import { Project } from '@prisma/client';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import ShowMore from '@/components/shared/show-more';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ProjectCard = ({ projects }: { projects?: Project[] }) => {
  const sortedProjects = projects?.sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  );
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <ul role='list'>
          {sortedProjects?.length! > 0 ? (
            <>
              {sortedProjects?.map((project, index) => (
                <li key={project.name}>
                  <Item project={project} />
                  {index !== sortedProjects.length - 1 && (
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
                No project details has been added by the user.
              </Text>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;

const Item = ({ project }: { project: Project }) => {
  const { name, desc, website, start, end } = project;
  return (
    <Box>
      <Heading as='h4' className='mb-1.5' weight='medium'>
        {name}
      </Heading>
      <Text as='p' size='sm' className='text-muted-foreground'>
        {desc ? <ShowMore text={desc} wordsDisplay={300} /> : 'No description'}
      </Text>
      <Flex
        align='center'
        justify='between'
        mt={4}
        className='text-muted-foreground'
      >
        <Flex align='center' className='gap-1.5'>
          {website && (
            <a
              href={website}
              target='_blank'
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              View Project
            </a>
          )}
        </Flex>
        <Text as='p' size='sm' className='line-clamp-1'>
          {start} - {end}
        </Text>
      </Flex>
    </Box>
  );
};
