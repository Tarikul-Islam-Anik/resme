import React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import {
  BoxVariants,
  boxVariants,
  GridVariants,
  gridVariants,
} from './variants';

type GridElement = React.ElementRef<'div'>;
interface GridProps
  extends React.ComponentPropsWithoutRef<'div'>,
    BoxVariants,
    GridVariants {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}
const Grid = React.forwardRef<GridElement, GridProps>((props, forwardedRef) => {
  const {
    asChild,
    className,
    display,
    rows,
    cols,
    align,
    gap,
    gapX,
    gapY,
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
    ...gridProps
  } = props;
  const Comp = asChild ? Slot : 'div';

  const gridClassName = cx(
    boxVariants({
      display: 'grid',
      gap,
      gapX,
      gapY,
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
    }),
    gridVariants({
      rows,
      cols,
      align,
    })
  );

  return (
    <Comp
      {...gridProps}
      ref={forwardedRef}
      className={cn(gridClassName, className)}
    />
  );
});

Grid.displayName = 'Grid';
export { Grid };
export type { GridProps };
