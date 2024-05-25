'use client';

import DigitalClock from './digital-clock';
import Searcher from './searcher';
import UserWidget from './user-widget';

const Topbar = () => {
  return (
    <div className='flex w-full items-start justify-between gap-5 py-7'>
      <DigitalClock />
      <Searcher />
      <UserWidget />
    </div>
  );
};

export default Topbar;
