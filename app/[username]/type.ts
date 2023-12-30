import {
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
  User,
  Analytics,
} from '@prisma/client';

export interface UserData extends User {
  analytics: Analytics;
  personalInfo: PersonalInfo;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  projects: Project[];
}
