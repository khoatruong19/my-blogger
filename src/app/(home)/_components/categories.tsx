'use client';

import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { CATEGORIES, CATEGORY_QUERY } from '../constants';
import NavItem from '@/components/nav-item';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Categories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQueryValue = searchParams.get(CATEGORY_QUERY)

  const handleAddSearchParams = (category: string) => {
    const searchParams = new URLSearchParams({
      [CATEGORY_QUERY]: category,
    });
    router.push(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    if (categoryQueryValue) return;

    handleAddSearchParams(CATEGORIES[0].path);
  }, [categoryQueryValue]);

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-3'>
        {CATEGORIES.map((item) => (
          <NavItem
            isActive={categoryQueryValue === item.path}
            className='h-24 w-24 flex-col gap-2 bg-accent text-sm font-medium'
            key={item.label}
            item={item}
            activeClassname='bg-primary/50 font-bold '
            iconClassname='w-6 h-6'
            onClick={() => handleAddSearchParams(item.path)}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Categories;
