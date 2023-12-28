'use server';

import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

import { personalInfoSchema, PersonalInfoType } from './schema';

export default async function UpdatePersonalInfo(formData: PersonalInfoType) {
  const session = await getServerSession();
  const validatedFields = personalInfoSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  const exists = await prisma.personalInfo.findFirst({
    where: {
      userEmail: session?.user?.email!,
    },
  });
  if (exists) {
    await prisma.personalInfo.update({
      where: {
        userEmail: session?.user?.email!,
      },
      data: {
        ...validatedFields.data,
      },
    });
  } else {
    await prisma.personalInfo.create({
      data: {
        ...validatedFields.data,
        user: {
          connect: {
            email: session?.user?.email!,
          },
        },
      },
    });
  }
}
