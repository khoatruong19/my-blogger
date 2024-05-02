import { PropsWithChildren } from 'react';
import ConvexClientProvider from '@/providers/ConvexClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </>
  );
};

export default Providers;
