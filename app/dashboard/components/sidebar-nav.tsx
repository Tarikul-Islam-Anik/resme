'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  const NavItem = (item: { href: string; title: string }) => (
    <Link
      key={item.href}
      href={item.href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        pathname === item.href
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-transparent hover:underline',
        'justify-start'
      )}
    >
      {item.title}
    </Link>
  );

  return (
    <nav
      className={cn(
        'flex flex-wrap justify-start space-y-1 lg:flex-col',
        className
      )}
      {...props}
    >
      {items.map(NavItem)}
    </nav>
  );
}

SidebarNav.displayName = 'SidebarNav';
