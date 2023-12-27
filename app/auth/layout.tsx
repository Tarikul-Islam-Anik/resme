import React from 'react';

import { Box } from '@/components/layout/box';
import { Container } from '@/components/layout/container';
import { Grid } from '@/components/layout/grid';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <Grid className='h-screen place-items-center'>{children}</Grid>;
};

AuthLayout.displayName = 'AuthLayout';
export default AuthLayout;
