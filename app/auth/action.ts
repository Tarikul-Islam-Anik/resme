'use server';

import prisma from '@/prisma';

import { authSchema, AuthSchemaType } from './schema';

export default async function createUser(formData: AuthSchemaType) {
  const validatedFields = authSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  await prisma.user.create({
    data: {
      ...validatedFields.data,
    },
  });
}
