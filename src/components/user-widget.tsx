import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FiBell } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';
import { IoMdSunny } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const UserDropdown = () => {
  const isAdmin = true;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        <div className='flex items-center gap-3'>
          <h2 className='text-xl font-semibold'>Khoa Truong</h2>
          <Avatar className='h-12 w-12'>
            <AvatarImage
              src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/438275054_3763619813883504_8913566025353382913_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RNn78psFVjoQ7kNvgFOP9WI&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCi34s6dEmd2q4NaA3LldWsHRISlOgptCI8rIqDXuV0dA&oe=6657E4A0'
              alt='@shadcn'
            />
            <AvatarFallback>KT</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[200px] border shadow-md' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isAdmin && (
          <DropdownMenuItem asChild>
            <Link href='/dashboard'>Dashboard</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Link href='/profile'>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='focus:font-semibold focus:text-destructive'>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
  return (
    <div className='flex items-center gap-5'>
      <UserDropdown />
      <NotificationsDropdown />
      <ThemeToggle />
    </div>
  );
};

export default UserWidget;
