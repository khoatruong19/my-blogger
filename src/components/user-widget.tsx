import React from 'react';
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
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
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
