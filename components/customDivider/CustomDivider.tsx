import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import THEMES from '../../constants/themes';

interface Props {
  style?: React.CSSProperties;
  orientation?: 'horizontal' | 'vertical';
}

const CustomDivider: FC<Props> = (props) => {
  const { orientation: propsOrientation, style } = props;

  const orientation = propsOrientation || 'horizontal';

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      divider: {
        width: orientation === 'horizontal' ? 75 : 3,
        height: orientation === 'horizontal' ? 3 : 75,
        backgroundColor: THEMES.dark.primary,
        ...style,
      },
    })
  );

  const classes = useStyles();

  return <Divider className={classes.divider} orientation={orientation} />;
};

export default CustomDivider;
