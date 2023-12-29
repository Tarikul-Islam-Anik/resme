'use client';
import React from 'react';

import { Bars2Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Flex } from '@/components/layout/flex';
import Logo from '@/components/shared/logo';
import { Strong } from '@/components/typography/strong';
import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { dashboardNavItems } from '../dashboard/components/dashboard-navitems';

const Header = () => {
  const pathname = usePathname();
  const show = pathname === '/' || pathname.includes('dashboard');
  return (
    show && (
      <header className='absolute left-0 top-0 z-50 w-full'>
        <nav aria-label='Global'>
          <Flex align='center' justify='between' className='p-6 lg:px-8'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <Flex align='center' gap={2}>
                <Logo className='h-8 w-8 rounded-md' />
                <Text size='xl' className='hidden lg:block'>
                  <Strong>Resme</Strong>
                </Text>
              </Flex>
            </Link>
            <Sheet>
              {pathname.includes('dashboard') ? (
                <SheetTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    <Bars2Icon className='h-7 w-7' />
                  </Button>
                </SheetTrigger>
              ) : null}
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigations</SheetTitle>
                </SheetHeader>
                {dashboardNavItems.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <Text size='sm' className='block p-4'>
                      {item.title}
                    </Text>
                  </Link>
                ))}
              </SheetContent>
            </Sheet>
          </Flex>
        </nav>
      </header>
    )
  );
};

Header.displayName = 'Header';
export default Header;
