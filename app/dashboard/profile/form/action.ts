'use server';

import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

import { ProfileDataType, profileSchema } from './schema';

export default async function UpdateProfileInfo(formData: ProfileDataType) {
  const session = await getServerSession();
  const validatedFields = profileSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  await prisma.user.update({
    where: {
      email: session?.user?.email!,
    },
    data: {
      ...validatedFields.data,
    },
  });
}
