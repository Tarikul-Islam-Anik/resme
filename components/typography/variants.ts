import { cva, type VariantProps } from 'class-variance-authority';

export const typographyVariants = cva('', {
  variants: {
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
      light: 'font-light',
      thin: 'font-thin',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normalCase: 'normal-case',
    },
    decoration: {
      underline: 'underline',
      lineThrough: 'line-through',
      noUnderline: 'no-underline',
    },
    style: {
      italic: 'italic',
      notItalic: 'not-italic',
    },
    color: {
      inherit: 'text-inherit',
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      destructive: 'text-destructive',
    },
  },
});

export type TypographyVariantsTypes = VariantProps<typeof typographyVariants>;
