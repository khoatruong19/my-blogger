import Link from 'next/link';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';

type NavItemProps = {
  item: NavItem;
  className?: string;
  activeClassname?: string;
  iconClassname?: string;
};

const NavItem = ({
  item,
  className = '',
  activeClassname = 'bg-accent',
  iconClassname = '',
}: NavItemProps) => {
  const pathname = usePathname();

  const { label, icon: Icon, activeIcon: ActiveIcon, path } = item;
  const isActive = pathname === path;

  return (
    <NavigationMenuItem>
      <Link href={path} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), className, isActive ? activeClassname : '')}
        >
          {isActive ? <ActiveIcon className={iconClassname} /> : <Icon className={iconClassname} />}
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavItem;
