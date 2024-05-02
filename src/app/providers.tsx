import { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
    </>
  );
};

export default Providers;
