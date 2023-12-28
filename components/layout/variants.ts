import { cva, type VariantProps } from 'class-variance-authority';

export const boxVariants = cva('', {
  variants: {
    display: {
      block: 'block',
      inline: 'inline',
      hidden: 'hidden',
      inlineBlock: 'inline-block',
      flex: 'flex',
      inlineFlex: 'inline-flex',
      grid: 'grid',
      inlineGrid: 'inline-grid',
    },
    position: {
      static: 'static',
      fixed: 'fixed',
      absolute: 'absolute',
      relative: 'relative',
      sticky: 'sticky',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
      screen: 'w-screen',
      min: 'w-min',
      max: 'w-max',
    },
    height: {
      auto: 'h-auto',
      full: 'h-full',
      screen: 'h-screen',
      min: 'h-min',
      max: 'h-max',
    },
    border: {
      0: 'border-0',
      1: 'border',
      2: 'border-2',
      4: 'border-4',
      8: 'border-8',
    },
    rounded: {
      none: 'rounded-none',
      rounded: 'rounded',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
    m: {
      0: 'm-0',
      2: 'm-2',
      4: 'm-4',
      8: 'm-8',
    },
    ml: {
      auto: 'ml-auto',
      0: 'ml-0',
      2: 'ml-2',
      4: 'ml-4',
      8: 'ml-8',
    },
    mr: {
      auto: 'mr-auto',
      0: 'mr-0',
      2: 'mr-2',
      4: 'mr-4',
      8: 'mr-8',
    },
    mt: {
      auto: 'mt-auto',
      0: 'mt-0',
      2: 'mt-2',
      4: 'mt-4',
      8: 'mt-8',
    },
    mb: {
      auto: 'mb-auto',
      0: 'mb-0',
      2: 'mb-2',
      4: 'mb-4',
      8: 'mb-8',
    },
    mx: {
      auto: 'mx-auto',
      0: 'mx-0',
      2: 'mx-2',
      4: 'mx-4',
      8: 'mx-8',
    },
    my: {
      auto: 'my-auto',
      0: 'my-0',
      2: 'my-2',
      4: 'my-4',
      8: 'my-8',
    },
    p: {
      0: 'p-0',
      2: 'p-2',
      4: 'p-4',
      8: 'p-8',
    },
    pl: {
      0: 'pl-0',
      2: 'pl-2',
      4: 'pl-4',
      8: 'pl-8',
    },
    pr: {
      0: 'pr-0',
      2: 'pr-2',
      4: 'pr-4',
      8: 'pr-8',
    },
    pt: {
      0: 'pt-0',
      2: 'pt-2',
      4: 'pt-4',
      8: 'pt-8',
    },
    pb: {
      0: 'pb-0',
      2: 'pb-2',
      4: 'pb-4',
      8: 'pb-8',
    },
    px: {
      0: 'px-0',
      2: 'px-2',
      4: 'px-4',
      8: 'px-8',
    },
    py: {
      0: 'py-0',
      2: 'py-2',
      4: 'py-4',
      8: 'py-8',
    },
    gap: {
      0: 'gap-0',
      2: 'gap-2',
      4: 'gap-4',
      8: 'gap-8',
    },
    gapX: {
      0: 'gap-x-0',
      2: 'gap-x-2',
      4: 'gap-x-4',
      8: 'gap-x-8',
    },
    gapY: {
      0: 'gap-y-0',
      2: 'gap-y-2',
      4: 'gap-y-4',
      8: 'gap-y-8',
    },
  },
  defaultVariants: {
    display: 'block',
    m: 0,
    p: 0,
  },
});
export type BoxVariants = VariantProps<typeof boxVariants>;

export const flexVariants = cva('', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    wrap: {
      none: 'flex-no-wrap',
      wrap: 'flex-wrap',
      reverse: 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    wrap: 'none',
  },
});

export type FlexVariants = VariantProps<typeof flexVariants>;

export const gridVariants = cva('', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      none: 'grid-cols-none',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      none: 'grid-rows-none',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    cols: 'none',
    rows: 'none',
  },
});

export type GridVariants = VariantProps<typeof gridVariants>;
