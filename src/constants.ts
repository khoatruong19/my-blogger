import { NavItem } from './types';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { CiSearch, CiBookmark } from 'react-icons/ci';
import { RiSearchFill } from 'react-icons/ri';
import { IoBookmark } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiDashboardFill } from 'react-icons/ri';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Discover',
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
    path: '/',
  },
  {
    label: 'Search',
    icon: CiSearch,
    activeIcon: RiSearchFill,
    path: '/search',
  },
  {
    label: 'Bookmark',
    icon: CiBookmark,
    activeIcon: IoBookmark,
    path: '/bookmark',
  },
];

export const DASHBOARD_NAV_ITEM = {
  label: 'Dashboard',
  icon: LuLayoutDashboard,
  activeIcon: RiDashboardFill,
  path: '/dashboard',
};
