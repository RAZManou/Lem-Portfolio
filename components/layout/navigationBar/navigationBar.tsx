import React, { useContext, useEffect } from 'react';
import { Box } from '@material-ui/core';
import ChooseLanguage from './chooseLanguage/chooseLanguage';
import Menu from './menu/menu';
import { FirstLoadContext } from '../../../providers/FirstLoadProvider';

const NavigationBar = () => {
  const { setIsFirstLoad } = useContext(FirstLoadContext);

  useEffect(() => {
    setIsFirstLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 'inherit',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ChooseLanguage />
      <Menu />
    </Box>
  );
};

export default NavigationBar;
