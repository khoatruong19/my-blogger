import { RiSearch2Line } from 'react-icons/ri';
import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Searcher = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex h-fit w-full max-w-[650px] items-center rounded-xl border-input bg-accent py-1.5 pl-5 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1',
        className
      )}
    >
      <RiSearch2Line className='h-7 w-7' />
      <Input
        {...props}
        type='search'
        placeholder='Search posts'
        ref={ref}
        className='flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
      />
    </div>
  );
});

Searcher.displayName = 'searcher';

export default Searcher;
