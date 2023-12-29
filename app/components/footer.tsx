import { Container } from '@/components/layout/container';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer>
      <Container className='py-4'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground'>
          Made with⚡by{' '}
          <a
            href={siteConfig.owner}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            oxyzen
          </a>
          . The source code is available on{' '}
          <a
            href={siteConfig.github}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}

Footer.displayName = 'Footer';
