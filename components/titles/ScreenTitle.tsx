import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import FONT_SIZES from '../../constants/fontSizes';
import THEMES from '../../constants/themes';

interface Props {
  title: string;
  subTitle?: string;
  titleStyle?: React.CSSProperties;
  subTitleStyle?: React.CSSProperties;
}

const ScreenTitle: FC<Props> = (props) => {
  const { title, subTitle, titleStyle, subTitleStyle } = props;

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
      },
      title: {
        color: THEMES.dark.white,
        textTransform: 'none',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONT_SIZES.screenTitle,
        ...titleStyle,
      },
      subTitle: {
        color: THEMES.dark.white,
        textTransform: 'none',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        maxWidth: 500,
        fontSize: FONT_SIZES.default,
        ...subTitleStyle,
      },
    })
  );

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>{title}</Box>
      <Box className={classes.subTitle}>{subTitle}</Box>
    </Box>
  );
};

export default ScreenTitle;
