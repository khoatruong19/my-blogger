import React, { PropsWithChildren } from 'react';

type SectionLayoutProps = PropsWithChildren & {
  pageTitle: string;
};

const SectionLayout = ({ pageTitle, children }: SectionLayoutProps) => {
  return (
    <section>
      <h1 className='mb-7 text-3xl font-semibold'>{pageTitle}</h1>
      {children}
    </section>
  );
};

export default SectionLayout;
