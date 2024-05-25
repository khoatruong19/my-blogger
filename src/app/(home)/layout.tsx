import SectionLayout from '@/components/section-layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SectionLayout pageTitle='Discover'>{children}</SectionLayout>;
}
