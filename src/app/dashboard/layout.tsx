import PageLayout from '@/components/page-layout';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout pageTitle='Dashboard'>
      <Suspense fallback={<p>Loading</p>}>{children}</Suspense>
    </PageLayout>
  );
}
