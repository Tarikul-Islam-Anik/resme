import { MetadataRoute } from 'next';

import prisma from '@/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      username: true,
    },
  });

  return [
    {
      url: 'https://resme.vercel.app/',
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://resme.vercel.app/${user.username}`,
      lastModified: new Date(),
    })),
  ];
}
