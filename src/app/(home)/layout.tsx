import PageLayout from '@/components/page-layout';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout pageTitle='Discover'>
      <Suspense fallback={<p>Loading</p>}>{children}</Suspense>
    </PageLayout>
  );
}
