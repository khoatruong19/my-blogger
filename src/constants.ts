import { NavItem } from './types';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { RiSearchFill } from 'react-icons/ri';

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
];
