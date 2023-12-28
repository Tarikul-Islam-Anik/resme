import React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import { typographyVariants, TypographyVariantsTypes } from './variants';

type TextElement = React.ElementRef<'span'>;
type TextAsChildProps = {
  asChild?: boolean;
  as?: never;
};
type TextSpanProps = {
  as?: 'span';
  asChild?: never;
};
type TextDivProps = {
  as: 'div';
  asChild?: never;
};
type TextLabelProps = {
  as: 'label';
  asChild?: never;
};
type TextPProps = { as: 'p'; asChild?: never };

type TextProps = (
  | TextAsChildProps
  | TextSpanProps
  | TextDivProps
  | TextLabelProps
  | TextPProps
) &
  TypographyVariantsTypes & {
    className?: string;
    children?: React.ReactNode;
  };

const Text = React.forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const {
    as: Tag = 'span',
    children,
    align,
    className,
    decoration,
    size,
    style,
    color,
    transform,
    weight,
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
});
Text.displayName = 'Text';

export { Text };
export type { TextProps };
