import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const sfPro = localFont({
  src: './SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
