import React, { FC, useContext } from 'react';
import { Box, Slide } from '@material-ui/core';
import { MenuInterface, ROUTES } from '../../../../constants/routes';
import { useTranslation } from 'react-i18next';
import MenuItem from './menuItem/menuItem';
import { FirstLoadContext } from '../../../../providers/FirstLoadProvider';

const Menu: FC = () => {
  const { t } = useTranslation();
  const { isFirstLoad } = useContext(FirstLoadContext);

  const MENUS: MenuInterface[] = [
    {
      label: t('menu.home'),
      route: ROUTES.HOME,
    },
    {
      label: t('menu.about'),
      route: ROUTES.ABOUT,
    },
    {
      label: t('menu.skills'),
      route: ROUTES.SKILLS,
    },
    {
      label: t('menu.career'),
      route: ROUTES.CAREER,
    },
    {
      label: t('menu.contact'),
      route: ROUTES.CONTACT,
    },
  ];

  return (
    <Slide in direction="left" timeout={1000} appear={isFirstLoad}>
      <Box style={{ display: 'flex' }}>
        {MENUS.map((menu) => (
          <MenuItem key={menu.route} menu={menu} />
        ))}
      </Box>
    </Slide>
  );
};

export default Menu;
