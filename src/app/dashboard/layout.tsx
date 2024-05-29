import BreadCrumbLayout from '@/components/breadcrumb-layout';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BreadCrumbLayout>
      <Suspense fallback={<p>Loading</p>}>{children}</Suspense>
    </BreadCrumbLayout>
  );
}
