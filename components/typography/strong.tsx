import React from 'react';

import { cn } from '@/lib/utils';

type StrongElement = React.ElementRef<'strong'>;
interface StrongProps extends React.ComponentPropsWithoutRef<'strong'> {}
const Strong = React.forwardRef<StrongElement, StrongProps>(
  (props, forwardedRef) => (
    <strong
      {...props}
      ref={forwardedRef}
      className={cn('font-semibold', props.className)}
    />
  )
);
Strong.displayName = 'Strong';

export { Strong };
export type { StrongProps };
