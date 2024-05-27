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
  isActive?: boolean;
  onClick?: () => void;
};

const NavItem = ({
  item,
  className = '',
  activeClassname = 'bg-accent',
  iconClassname = '',
  isActive = true,
  onClick,
}: NavItemProps) => {
  const pathname = usePathname();

  const { label, icon: Icon, activeIcon: ActiveIcon } = item;

  const path = onClick ? pathname : item.path;
  const isActiveVerified = pathname === path && isActive;

  return (
    <NavigationMenuItem onClick={onClick}>
      <Link href={path} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            'h-auto w-[70px] flex-col gap-1 rounded-xl p-3 font-extralight hover:bg-primary/60',
            className,
            {
              [activeClassname]: isActiveVerified,
            }
          )}
        >
          {isActiveVerified ? <ActiveIcon className={iconClassname} /> : <Icon className={iconClassname} />}
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavItem;
