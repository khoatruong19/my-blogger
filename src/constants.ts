import { NavItem } from './types';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { CiSearch, CiBookmark } from 'react-icons/ci';
import { RiSearchFill } from 'react-icons/ri';
import { IoBookmark } from 'react-icons/io5';

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
