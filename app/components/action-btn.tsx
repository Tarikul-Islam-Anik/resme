import React from 'react';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { auth } from '@/lib/auth';

const ActionBtn = async () => {
  const session = await auth();

  return (
    <Link
      href={session ? '/dashboard' : '/auth'}
      className={buttonVariants({ variant: 'default' })}
    >
      {session ? 'Dashboard' : 'Get Started'}
    </Link>
  );
};

ActionBtn.displayName = 'ActionBtn';
export default ActionBtn;
