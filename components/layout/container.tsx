import React from 'react';

import { cn } from '@/lib/utils';

type ContainerElement = React.ElementRef<'div'>;
interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Container = React.forwardRef<ContainerElement, ContainerProps>(
  (props, forwardedRef) => {
    const { asChild = false, className, children, ...containerProps } = props;
    return (
      <div
        {...containerProps}
        ref={forwardedRef}
        className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      >
        {asChild ? (
          children
        ) : (
          <div className='mx-auto max-w-3xl'>{children}</div>
        )}
      </div>
    );
  }
);

Container.displayName = 'Container';
export { Container };
export type { ContainerProps };
