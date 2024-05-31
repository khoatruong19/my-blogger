import { AiFillFile } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa6';
import { NavItem } from '@/types';

export const DASHBOARD_ITEMS: NavItem[] = [
  {
    label: 'Blogs',
    path: 'dashboard/blogs',
    icon: AiFillFile,
    activeIcon: AiFillFile,
  },
  {
    label: 'Users',
    path: 'dashboard/users',
    icon: FaUser,
    activeIcon: FaUser,
  },
];
