import { PropsWithChildren } from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';

const AppLayout = ({ children }: PropsWithChildren) => {
  const isAuth = true;
  return (
    <main className='flex-start flex min-h-screen bg-secondary'>
      {isAuth && <Sidebar />}
      <section className='max-h-screen flex-1 overflow-y-auto rounded-bl-[2rem] rounded-tl-[2rem] border bg-white px-12 py-2'>
        <Topbar />
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
