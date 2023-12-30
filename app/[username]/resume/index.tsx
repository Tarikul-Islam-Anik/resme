import { Box } from '@/components/layout/box';
import { Grid } from '@/components/layout/grid';
import { Tabs, TabsContent } from '@/components/ui/tabs';

import EducationCard from './education-card';
import ExperienceCard from './experience-card';
import ProjectCard from './project-card';
import UserAboutCard from './user-about-card';
import UserInfoCard from './user-info-card';
import UserMediaCard from './user-media-card';
import UserSkillSCard from './user-skills-card';

import { UserData } from '../type';

export default function Resume({ userData }: { userData: UserData }) {
  const { educations, experiences, projects, skills, personalInfo } = userData;

  const tabsContent = [
    {
      name: 'educations',
      component: <EducationCard educations={educations} />,
    },
    {
      name: 'projects',
      component: <ProjectCard projects={projects} />,
    },
    {
      name: 'experiences',
      component: <ExperienceCard experiences={experiences} />,
    },
  ];

  return (
    <Grid cols={1} className='lg:grid-cols-3 lg:space-x-4'>
      <Box mb={4} className='space-y-4 lg:mb-0 lg:ml-auto lg:w-full'>
        <UserMediaCard {...userData} />
        <UserInfoCard informations={personalInfo} />
        {skills.length ? <UserSkillSCard skills={skills} /> : null}
      </Box>
      <Box className='lg:col-span-2'>
        <Tabs
          defaultValue='educations'
          className='mx-auto flex w-full flex-col items-center space-y-4'
        >
          <UserAboutCard about={personalInfo?.about} />
          {tabsContent.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className='w-full'>
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </Box>
    </Grid>
  );
}
