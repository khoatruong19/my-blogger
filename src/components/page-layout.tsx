import { PropsWithChildren } from 'react';

type PageLayoutProps = PropsWithChildren & {
  pageTitle: string;
};

const PageLayout = ({ pageTitle, children }: PageLayoutProps) => {
  return (
    <>
      <h1 className='mb-7 text-3xl font-semibold'>{pageTitle}</h1>
      {children}
    </>
  );
};

export default PageLayout;
