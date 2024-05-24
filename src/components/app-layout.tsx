import { PropsWithChildren } from 'react';
import Sidebar from './sidebar';

const AppLayout = ({ children }: PropsWithChildren) => {
  const isAuth = true;
  return (
    <main className='flex-start flex min-h-screen bg-secondary'>
      {isAuth && <Sidebar />}
      <section className='flex-1 rounded-bl-[2rem] rounded-tl-[2rem] border bg-white p-4'>{children}</section>
    </main>
  );
};

export default AppLayout;
