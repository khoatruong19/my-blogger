import type { Metadata } from 'next';
import './globals.css';
// import Providers from './providers';
import { Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';

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
    <html lang='en'>
      <body className={clsx(inter.className)}>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
