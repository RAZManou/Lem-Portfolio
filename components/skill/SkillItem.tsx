import {
  Box,
  createStyles,
  makeStyles,
  Slider,
  Theme,
  withStyles,
} from '@material-ui/core';
import React, { FC } from 'react';
import THEMES from '../../constants/themes';

interface Props {
  label: string;
  value?: number;
  style?: React.CSSProperties;
}

const SkillItem: FC<Props> = (props) => {
  const { label, value, style } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 150,
        marginBottom: 50,
        ...style,
      },
      label: {
        color: THEMES.dark.white,
        fontWeight: 'bold',
      },
      root: {
        color: THEMES.dark.primaryTransparent,
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 8px)',
        fontWeight: 'bold',
        color: THEMES.dark.primaryTransparent,
        fontSize: 12,
      },
      track: {
        height: 8,
      },
      rail: {
        height: 8,
        color: THEMES.dark.secondary,
      },
      test: {
        color: 'blue',
      },
    })
  );

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.label}>{label} :</Box>

      <Slider
        value={value}
        valueLabelDisplay="on"
        valueLabelFormat={(val) => `${val}%`}
        classes={{
          root: classes.root,
          rail: classes.rail,
          track: classes.track,
          thumb: classes.thumb,
          valueLabel: classes.valueLabel,
        }}
      />
    </Box>
  );
};

export default SkillItem;
