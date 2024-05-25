import { SiReactivex } from 'react-icons/si';
import { PiPlant, PiPlantFill } from 'react-icons/pi';
import { NavItem } from '@/types';

export const CATEGORIES: NavItem[] = [
  {
    label: 'Tech',
    path: 'tech',
    icon: SiReactivex,
    activeIcon: SiReactivex,
  },
  {
    label: 'Life',
    path: 'life',
    icon: PiPlant,
    activeIcon: PiPlantFill,
  },
];

export const CATEGORY_QUERY = "category"
