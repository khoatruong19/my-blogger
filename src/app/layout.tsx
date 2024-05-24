import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
