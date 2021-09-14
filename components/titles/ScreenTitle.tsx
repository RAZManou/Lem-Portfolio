import {
  Box,
  createStyles,
  Divider,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React, { FC } from 'react';
import FONT_SIZES from '../../constants/fontSizes';
import THEMES from '../../constants/themes';

interface Props {
  title: string;
  subTitle?: string;
  containerStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  subTitleStyle?: React.CSSProperties;
  noDivider?: boolean;
  alignText?: 'left' | 'center' | 'right';
}

const ScreenTitle: FC<Props> = (props) => {
  const {
    title,
    subTitle,
    containerStyle,
    titleStyle,
    subTitleStyle,
    noDivider,
    alignText,
  } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        marginBottom: 20,
        ...containerStyle,
      },
      title: {
        color: THEMES.dark.white,
        textTransform: 'none',
        marginBottom: 20,
        textAlign: alignText || 'center',
        fontWeight: 'bold',
        fontSize: FONT_SIZES.screenTitle,
        width: 500,
        ...titleStyle,
      },
      subTitle: {
        color: THEMES.dark.white,
        textTransform: 'none',
        marginTop: 10,
        marginBottom: 30,
        textAlign: alignText || 'center',
        maxWidth: 500,
        fontSize: FONT_SIZES.default,
        ...subTitleStyle,
      },
      divider: {
        width: 75,
        height: 3,
        backgroundColor: THEMES.dark.primary,
      },
    })
  );

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>{title}</Box>
      {subTitle && <Box className={classes.subTitle}>{subTitle}</Box>}
      {!noDivider && <Divider className={classes.divider} />}
    </Box>
  );
};

export default ScreenTitle;
