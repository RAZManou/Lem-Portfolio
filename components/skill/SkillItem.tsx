import {
  Box,
  createStyles,
  makeStyles,
  Slider,
  Theme,
} from '@material-ui/core';
import React, { FC } from 'react';
import FONT_SIZES from '../../constants/fontSizes';
import THEMES from '../../constants/themes';

interface Props {
  label: string;
  value?: number;
  style?: React.CSSProperties;
  isGlobalSkill?: boolean;
}

const SkillItem: FC<Props> = (props) => {
  const { label, value, style, isGlobalSkill } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 150,
        marginBottom: 30,
        marginLeft: !isGlobalSkill ? 50 : 0,
        ...style,
      },
      label: {
        color: THEMES.dark.white,
        fontWeight: 'bold',
        fontSize: isGlobalSkill ? FONT_SIZES.title : FONT_SIZES.small,
      },
      root: {
        color: isGlobalSkill
          ? THEMES.dark.primaryTransparent
          : THEMES.dark.primaryVeryTransparent,
        height: isGlobalSkill ? 8 : 6,
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
        color: isGlobalSkill
          ? THEMES.dark.primaryTransparent
          : THEMES.dark.primaryVeryTransparent,
        fontSize: FONT_SIZES.smaller,
      },
      track: {
        height: isGlobalSkill ? 8 : 6,
      },
      rail: {
        height: isGlobalSkill ? 8 : 6,
        color: THEMES.dark.secondary,
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
