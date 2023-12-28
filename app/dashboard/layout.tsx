import { Metadata } from 'next';

import { Box } from '@/components/layout/box';
import { Container } from '@/components/layout/container';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';

import { SidebarNav } from './components/sidebar-nav';

export const metadata: Metadata = {
  title: 'Dashboard | ' + siteConfig.name,
  description: 'Manage your account settings and edit your profile.',
};

const sidebarNavItems = [
  {
    title: 'Analytics',
    href: '/dashboard',
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
  },
  {
    title: 'Personal Information',
    href: '/dashboard/personal-information',
  },
  {
    title: 'Educational Informations',
    href: '/dashboard/education',
  },
  {
    title: 'Projects',
    href: '/dashboard/projects',
  },
  {
    title: 'Skills',
    href: '/dashboard/skills',
  },
  {
    title: 'Experiences',
    href: '/dashboard/experience',
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Container className='max-w-3xl p-9'>
      <Flex direction='column' mt={8}>
        <Box className='col-span-2 space-y-0.5'>
          <Heading size='2xl' weight='bold' className='tracking-tight'>
            Dashboard
          </Heading>
          <Text as='p' className='text-muted-foreground'>
            Manage your account settings and edit your profile.
          </Text>
        </Box>
        <Separator className='my-8' />
        <Flex
          direction='column'
          justify='between'
          className='space-y-8 lg:flex-row lg:space-y-0'
        >
          <aside className='-mx-4'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <Box className='flex-1 lg:max-w-lg'>{children}</Box>
        </Flex>
      </Flex>
    </Container>
  );
}

DashboardLayout.displayName = 'DashboardLayout';
