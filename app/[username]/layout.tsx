import { Container } from '@/components/layout/container';

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: PostLayoutProps) {
  return <Container asChild>{children}</Container>;
}

ResumeLayout.displayName = 'ResumeLayout';
