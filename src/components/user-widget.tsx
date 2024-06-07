import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FiBell } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';
import { IoMdSunny } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { Skeleton } from '@/components/ui/skeleton';

const NotificationsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none' asChild>
        <Button className='relative h-[52px] w-[52px] rounded-full bg-accent text-accent-foreground'>
          <FiBell className='h-5 w-5' />
          <span className='absolute right-4 top-3 h-2 w-2 rounded-full bg-destructive' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='right-0 min-w-[200px] border shadow-md' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/profile'>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='focus:font-semibold focus:text-destructive'>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <Button
      className='h-[52px] w-[52px] rounded-full bg-accent text-accent-foreground'
      onClick={handleToggleTheme}
    >
      {theme === 'light' ? <IoMoonSharp className='h-8 w-8' /> : <IoMdSunny className='h-8 w-8' />}
    </Button>
  );
};

const UserWidget = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded)
    return (
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    );
 
  return (
    <div className='flex items-center gap-5'>
      {user ? (
        <>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-12 h-12 ml-1',
                userButtonPopoverCard: 'w-[250px]',
                userButtonOuterIdentifier: 'text-lg font-semibold text-foreground',
              },
            }}
          />
          <NotificationsDropdown />
        </>
      ) : (
        <Link href='/sign-in'>
          <Button className='font-bold'>Login</Button>
        </Link>
      )}

      <ThemeToggle />
    </div>
  );
};

export default UserWidget;
