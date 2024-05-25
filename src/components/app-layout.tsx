import { PropsWithChildren } from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';

const AppLayout = ({ children }: PropsWithChildren) => {
  const isAuth = true;
  return (
    <main className='flex-start flex min-h-screen bg-secondary'>
      {isAuth && <Sidebar />}
      <section className='flex-1 rounded-bl-[2rem] rounded-tl-[2rem] border bg-white px-10 py-2'>
        <Topbar />
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
