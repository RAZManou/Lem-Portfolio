import React, { FC } from 'react';
import {
  Container,
  Box,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import NavigationBar from './navigationBar/navigationBar';

const BackgroundPath = '/home_background_image.jpg';

const Layout: FC = ({ children }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundPosition: 'center',
        // backgroundColor: THEMES.dark.secondary,
        backgroundImage: `url(${BackgroundPath})`,
        minHeight: '100vh',
        padding: 0,
        overflowX: 'hidden',
      },
      boxScreen: {
        width: '100vw',
        minHeight: 'calc(100vh - 80px)',
        paddingTop: 80,
      },
    })
  );

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <NavigationBar />
      <Box className={classes.boxScreen}>{children}</Box>
    </Container>
  );
};

export default Layout;
