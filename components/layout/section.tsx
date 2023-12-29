import React from 'react';

import { cn } from '@/lib/utils';

type SectionElement = React.ElementRef<'div'>;

interface SectionProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  children?: React.ReactNode;
}
const Section = React.forwardRef<SectionElement, SectionProps>(
  (props, forwardedRef) => {
    const { className, children, ...sectionProps } = props;
    return (
      <section
        {...sectionProps}
        ref={forwardedRef}
        className={cn('pb-4', className)}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
export { Section };
export type { SectionProps };
