import React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import { BoxVariants, boxVariants } from './variants';

type BoxElement = React.ElementRef<'div'>;
interface BoxProps extends React.ComponentPropsWithoutRef<'div'>, BoxVariants {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

const Box = React.forwardRef<BoxElement, BoxProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    display,
    border,
    rounded,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    gap,
    position,
    width,
    height,
    ...boxProps
  } = props;

  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      {...boxProps}
      ref={forwardedRef}
      className={cn(
        boxVariants({
          display,
          gap,
          position,
          width,
          height,
          border,
          rounded,
          m,
          mt,
          mr,
          mb,
          ml,
          mx,
          my,
          p,
          pt,
          pr,
          pb,
          pl,
          px,
          py,
          className,
        })
      )}
    />
  );
});

Box.displayName = 'Box';
export { Box };
export type { BoxProps };
