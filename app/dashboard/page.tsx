import React from 'react';

import { Download, MousePointerClick } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import prisma from '@/prisma';

import DeleteAccount from './components/delete-account';
import SectionHeading from './components/section-heading';
import StatusCard from './components/status-card';

async function getAnalytics() {
  const session = await getServerSession();
  return prisma.analytics.findMany({
    where: {
      userEmail: session?.user?.email!,
    },
    select: {
      clicks: true,
      downloads: true,
    },
  });
}
const DashBoardPage = async () => {
  const analytics = await getAnalytics();

  const formatNumber = (num: number) => new Intl.NumberFormat().format(num);

  return (
    <Box className='space-y-6'>
      <SectionHeading
        title='Analytics'
        description='Check your resume performance.'
      />
      <Flex gap={4} direction='column' className='sm:flex-row'>
        <StatusCard
          title='Total clicks'
          value={analytics.length ? formatNumber(analytics[0].clicks) : 0}
          icon={
            <MousePointerClick className='roa h-5 w-5 text-muted-foreground' />
          }
          description='Lifetime views of your resume.'
        />
        <StatusCard
          title='Total downloads'
          value={analytics.length ? formatNumber(analytics[0].downloads) : 0}
          icon={<Download className='h-5 w-5 text-muted-foreground' />}
          description='People downloaded your resume.'
        />
      </Flex>
      <DeleteAccount />
    </Box>
  );
};

DashBoardPage.displayName = 'DashBoardPage';
export default DashBoardPage;
