'use client';

import { NavigationMenu, NavigationMenuList } from './ui/navigation-menu';
import NavItem from './nav-item';
import { NAV_ITEMS } from '@/constants';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';

const Sidebar = () => {
  return (
    <aside className='flex w-[96px] flex-col items-center gap-10 py-7'>
      <Image alt='logo' src={LogoImg} width={32} height={32} objectFit='cover' />
      <NavigationMenu>
        <NavigationMenuList className='flex flex-col gap-5'>
          {NAV_ITEMS.map((item) => (
            <NavItem
              className='h-auto w-[70px] flex-col gap-2 rounded-xl p-3 text-xs hover:bg-primary/60'
              activeClassname='bg-primary/90 font-bold'
              iconClassname='w-6 h-6'
              key={item.path}
              item={item}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};

export default Sidebar;
