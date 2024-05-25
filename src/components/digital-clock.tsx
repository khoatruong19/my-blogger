import { getCurrentTime } from '@/app/utils/date';
import React, { useEffect, useState } from 'react';
import {format} from "date-fns"

const DigitalClock = () => {
  let time = getCurrentTime();
  const [clockTime, setClockTime] = useState(time);

  const updateTime = () => {
    time = getCurrentTime();
    setClockTime(time);
  };

  useEffect(() => {
    const interval = setInterval(updateTime);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <div className='flex h-fit flex-col items-center justify-center gap-1'>
      <h2 className='text-5xl font-bold'>{clockTime}</h2>
      <h5 className='text-sm font-extralight text-gray-400'>{format(new Date(), "eeee, e, LLL.")}</h5>
    </div>
  );
};

export default DigitalClock;
