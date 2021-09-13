import { Box, makeStyles, createStyles, Slide } from '@material-ui/core';
import React, { useContext } from 'react';
import { FlagEnums } from '../../../../constants/translations';
import CustomFlag from './customFlag/customFlag';
import { useTranslation } from 'react-i18next';
import { FirstLoadContext } from '../../../../providers/FirstLoadProvider';

const ChooseLanguage = () => {
  const { i18n } = useTranslation();
  const { isFirstLoad } = useContext(FirstLoadContext);
  const currentLanguage = i18n.language;

  return (
    <Slide in direction="right" timeout={1000} appear={isFirstLoad}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
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
