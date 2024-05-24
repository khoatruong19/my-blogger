import { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  icon: IconType;
  activeIcon: IconType;
  path: string;
}
