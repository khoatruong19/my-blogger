import { getCurrentTime } from '@/app/utils/date';
import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';

const DigitalClock = () => {
  let time = getCurrentTime();
  const [clockTime, setClockTime] = useState(time);

  const updateTime = useCallback(() => {
    time = getCurrentTime();
    setClockTime(time);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTime);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <div className='flex h-fit flex-col items-center justify-center gap-1'>
      <h2 className='text-5xl font-bold'>{clockTime}</h2>
      <h5 className='text-sm font-thin text-primary-foreground'>{format(new Date(), 'eeee, e, LLL')}</h5>
    </div>
  );
};

export default DigitalClock;
