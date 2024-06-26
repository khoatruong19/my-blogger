import type { Metadata } from 'next';
import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';
import AppLayout from '@/components/app-layout';
import Providers from './providers';

const inter = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'My Blogger',
  description: 'Just a blog!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={clsx(inter.className)}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
