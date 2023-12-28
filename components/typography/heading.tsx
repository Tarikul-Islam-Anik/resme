import React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import { typographyVariants, TypographyVariantsTypes } from './variants';

type HeadingElement = React.ElementRef<'h1'>;
type HeadingAsChildProps = {
  asChild?: boolean;
  as?: never;
};
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: never;
};
type HeadingProps = (HeadingAsChildProps | HeadingAsProps) &
  TypographyVariantsTypes & {
    className?: string;
    children?: React.ReactNode;
  };

const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (props, forwardedRef) => {
    const {
      as: Tag = 'h1',
      children,
      align,
      className,
      decoration,
      size,
      style,
      color,
      transform,
      weight = 'bold',
      asChild = false,
      ...textProps
    } = props;
    return (
      <Slot
        {...textProps}
        ref={forwardedRef}
        className={cn(
          typographyVariants({
            align,
            decoration,
            size,
            style,
            transform,
            weight,
            color,
            className,
          })
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
export type { HeadingProps };
