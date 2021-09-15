import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import THEMES from '../../constants/themes';

interface Props {
  label: string;
  value?: string;
  style?: React.CSSProperties;
}

const Info: FC<Props> = (props) => {
  const { label, value, style } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        marginBottom: 50,
        ...style,
      },
      label: {
        color: THEMES.dark.primary,
        fontWeight: 'bold',
      },
      value: {},
    })
  );

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.label}>{label} :</Box>
      {value && <Box className={classes.value}>{value}</Box>}
    </Box>
  );
};

export default Info;
