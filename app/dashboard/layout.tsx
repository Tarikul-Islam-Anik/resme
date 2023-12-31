import { Metadata } from 'next';

import { Box } from '@/components/layout/box';
import { Container } from '@/components/layout/container';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';

import getUserData from './components/action';
import { dashboardNavItems } from './components/dashboard-navitems';
import ShareLink from './components/sharelink';
import { SidebarNav } from './components/sidebar-nav';


export const metadata: Metadata = {
  title: 'Dashboard | ' + siteConfig.name,
  description: 'Manage your account settings and edit your profile.',
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getUserData();
  return (
    <Container className='mt-4 max-w-3xl p-9 lg:mt-0'>
      <Flex direction='column' mt={8}>
        <Flex align='center' justify='between'>
          <Box className='space-y-0.5'>
            <Heading size='2xl' weight='bold' className='tracking-tight'>
              Dashboard
            </Heading>
            <Text as='p' className='text-muted-foreground'>
              Manage your account settings and edit your profile.
            </Text>
          </Box>
          <ShareLink link={user?.username!} />
        </Flex>
        <Separator className='mt-8 lg:my-8' />
        <Flex
          direction='column'
          justify='between'
          className='space-y-8 lg:flex-row lg:space-y-0'
        >
          <aside className='-mx-4'>
            <SidebarNav items={dashboardNavItems} />
          </aside>
          <Box className='flex-1 lg:max-w-lg'>{children}</Box>
        </Flex>
      </Flex>
    </Container>
  );
}

DashboardLayout.displayName = 'DashboardLayout';
