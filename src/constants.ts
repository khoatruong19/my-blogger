import { NavItem } from './types';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BiSolidSearchAlt2 } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Discover',
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
    path: '/',
  },
  {
    label: 'Search',
    icon: BiSearchAlt2,
    activeIcon: BiSolidSearchAlt2,
    path: '/search',
  },
];
