import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/providers';
import ConvexClientProvider from '@/providers/ConvexClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ConvexClientProvider>
        <ThemeProvider attribute='class' defaultTheme='light'>
          {children}
        </ThemeProvider>
      </ConvexClientProvider>
    </>
  );
};

export default Providers;
