import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaHeart } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        <div className='flex items-center gap-3'>
          <h2 className='text-xl font-semibold'>Khoa Truong</h2>
          <Avatar className='h-12 w-12'>
            <AvatarImage src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/438275054_3763619813883504_8913566025353382913_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RNn78psFVjoQ7kNvgFOP9WI&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCi34s6dEmd2q4NaA3LldWsHRISlOgptCI8rIqDXuV0dA&oe=6657E4A0' alt='@shadcn' />
            <AvatarFallback>KT</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[200px] border shadow-md' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem className='focus:font-semibold focus:text-destructive'>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const FavoriteBlogsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        <div className='flex items-center justify-center rounded-full bg-accent p-4'>
          <FaHeart className='h-5 w-5 text-destructive' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='right-0 min-w-[200px] border shadow-md' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem className='focus:font-semibold focus:text-destructive'>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NotificationsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        <div className='relative flex items-center justify-center rounded-full bg-accent p-4'>
          <FiBell className='h-5 w-5' />
          <span className='absolute right-4 top-3 h-2 w-2 rounded-full bg-destructive' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='right-0 min-w-[200px] border shadow-md' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem className='focus:font-semibold focus:text-destructive'>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UserWidget = () => {
  return (
    <div className='flex items-center gap-5'>
      <UserDropdown />
      <FavoriteBlogsDropdown />
      <NotificationsDropdown />
    </div>
  );
};

export default UserWidget;
