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

export const BLOG_CATEGORIES = [
  {
    label: 'Tech',
    value: 'tech',
  },
  {
    label: 'Life',
    value: 'life',
  },
];

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
