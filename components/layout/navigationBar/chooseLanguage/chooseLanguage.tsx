import { Box, makeStyles, createStyles, Slide, Theme } from '@material-ui/core';
import React, { useContext } from 'react';
import { FlagEnums } from '../../../../constants/translations';
import CustomFlag from './customFlag/customFlag';
import { useTranslation } from 'react-i18next';
import { FirstLoadContext } from '../../../../providers/FirstLoadProvider';

const ChooseLanguage = () => {
  const { i18n } = useTranslation();
  const { isFirstLoad } = useContext(FirstLoadContext);
  const currentLanguage = i18n.language;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
    })
  );

  const classes = useStyles();

  return (
    <Slide in direction="right" timeout={1000} appear={isFirstLoad}>
      <Box className={classes.container}>
        {currentLanguage === FlagEnums.FRENCH ? (
          <CustomFlag language={FlagEnums.ENGLISH} />
        ) : (
          <CustomFlag language={FlagEnums.FRENCH} />
        )}
      </Box>
    </Slide>
  );
};

export default ChooseLanguage;
