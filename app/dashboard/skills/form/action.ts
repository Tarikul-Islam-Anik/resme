'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma';

import { skillschema, SkillType } from './schema';

export default async function AddSkillInfo(formData: SkillType) {
  const session = await getServerSession();
  const validatedFields = skillschema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  const data = validatedFields.data.skills?.map((skill) => {
    return {
      name: skill.value,
      userEmail: session?.user?.email!,
    };
  });

  data &&
    (await prisma.skill.createMany({
      data: data,
    }));

  revalidatePath('/dashboard/skills');
}

export async function DeleteSkillInfo(name: string) {
  const session = await getServerSession();

  await prisma.skill.delete({
    where: {
      name_userEmail: {
        name: name,
        userEmail: session?.user?.email!,
      },
    },
  });
  revalidatePath('/dashboard/skills');
}
