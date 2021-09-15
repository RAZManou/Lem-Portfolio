import React, { FC } from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { MenuInterface } from '../../../../../constants/routes';
import { useRouter } from 'next/router';
import THEMES from '../../../../../constants/themes';

interface Props {
  menu: MenuInterface;
}

const MenuItem: FC<Props> = (props) => {
  const { menu } = props;
  const router = useRouter();
  const isSelected = router.route === menu.route;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30,
        marginBottom: 20,
        cursor: 'pointer',
        color: isSelected ? THEMES.dark.primary : THEMES.dark.white,
        height: 30,
        '&:hover': {
          color: THEMES.dark.primary,
        },
      },
    })
  );

  const classes = useStyles();

  const navigate = () => {
    router.push(menu.route);
  };

  return (
    <Box className={classes.item} onClick={navigate}>
      {menu.label}
      <Box
        style={{
          width: 35,
          height: isSelected ? 2.5 : 0,
          borderRadius: 50,
          backgroundColor: THEMES.dark.primary,
        }}
      />
    </Box>
  );
};

export default MenuItem;
