import React from 'react';

import type { Metadata } from 'next';
import { Viewport } from 'next';
import './globals.css';

import { inter } from '@/app/fonts';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/config/site';
import ContextProvider from '@/context/context-provider';

export const metadata: Metadata = {
  title: 'Resme - Create Beautiful Resumes in Seconds!',
  description: siteConfig.description,
  metadataBase: siteConfig.url,
};

export const viewport: Viewport = {
  themeColor: 'white',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ContextProvider>
          <main>{children}</main>
        </ContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
