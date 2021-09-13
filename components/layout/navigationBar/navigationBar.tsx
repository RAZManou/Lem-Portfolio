import React, { useContext, useEffect } from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import ChooseLanguage from './chooseLanguage/chooseLanguage';
import Menu from './menu/menu';
import { FirstLoadContext } from '../../../providers/FirstLoadProvider';

const NavigationBar = () => {
  const { setIsFirstLoad } = useContext(FirstLoadContext);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'inherit',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    })
  );

  const classes = useStyles();

  useEffect(() => {
    setIsFirstLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={classes.container}>
      <ChooseLanguage />
      <Menu />
    </Box>
  );
};

export default NavigationBar;
