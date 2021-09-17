import React from 'react';
import ActiveLink from '../../../UiElements/NavLink/NavLink';
import Menu, { MenuItem, MenuLink } from './MainMenu.styled';

const menuItems = [
  {
    id: 1,
    label: 'Overview',
    path: '/',
  },
  {
    id: 2,
    label: 'Network',
    path: '/apps',
  },
  {
    id: 3,
    label: 'Device Management',
    path: '/shop',
  },
  // {
  //   id: 4,
  //   label: 'Integrations',
  //   path: '/integrations',
  // },
  {
    id: 4,
    label: 'RADBI',
    path: '/chat',
  },
  {
    id: 5,
    label: 'Devices',
    path: '/charts',
  },
  {
    id: 6,
    label: 'Resiliency',
    path: '/forms',
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const MainMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map(item => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
