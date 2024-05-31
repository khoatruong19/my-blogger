'use client';

import NavItem from '@/components/nav-item';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { DASHBOARD_ITEMS } from '../constants';

const ItemsList = () => {
  return (
    <NavigationMenu className='w-full'>
      <NavigationMenuList className='w-full flex-wrap justify-start gap-3'>
        {DASHBOARD_ITEMS.map((item) => (
          <NavItem
            className='h-24 w-24 flex-col gap-2 bg-accent text-sm font-medium'
            key={item.label}
            item={item}
            activeClassname='bg-primary/60 font-bold '
            iconClassname='w-6 h-6'
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ItemsList;
