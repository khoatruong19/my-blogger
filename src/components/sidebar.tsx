'use client';

import Image from 'next/image';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { NAV_ITEMS } from '@/constants';
import LogoImg from '@/assets/logo.png';
import NavItem from './nav-item';

const Sidebar = () => {
  return (
    <aside className='flex w-[96px] flex-col items-center gap-28 pt-12'>
      <Image alt='logo' src={LogoImg} width={32} height={32} objectFit='cover' />
      <NavigationMenu>
        <NavigationMenuList className='flex flex-col gap-5'>
          {NAV_ITEMS.map((item) => (
            <NavItem
              className='text-xxs'
              activeClassname='bg-primary/50 font-bold'
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
