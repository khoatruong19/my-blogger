'use client';

import NavItem from '@/components/nav-item';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import useCategoryParams from '../_hooks/useCategoryParams';
import { CATEGORIES } from '../constants';

const Categories = () => {
  const { category, handleAddCategoryParams } = useCategoryParams();

  return (
    <NavigationMenu className='w-full'>
      <NavigationMenuList className='w-full flex-wrap justify-start gap-3'>
        {CATEGORIES.map((item) => (
          <NavItem
            isActive={category === item.path}
            className='h-24 w-24 flex-col gap-2 bg-accent text-sm font-medium'
            key={item.label}
            item={item}
            activeClassname='bg-primary/60 font-bold '
            iconClassname='w-6 h-6'
            onClick={() => handleAddCategoryParams(item.path)}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Categories;
