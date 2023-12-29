import {
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
  User,
} from '@prisma/client';

export interface UserData extends User {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  projects: Project[];
}
