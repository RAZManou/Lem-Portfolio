import {
  Box,
  makeStyles,
  createStyles,
  Slide,
  Theme,
  Tooltip,
} from '@material-ui/core';
import React from 'react';
import { FlagEnums } from '../../../../constants/translations';
import CustomFlag from './customFlag/customFlag';
import { useTranslation } from 'react-i18next';

const ChooseLanguage = () => {
  const { i18n, t } = useTranslation();
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
    <Slide in direction="right" timeout={1000}>
      <Tooltip title={t('menu.change.language.tooltip') || ''}>
        <Box className={classes.container}>
          {currentLanguage === FlagEnums.FRENCH ? (
            <CustomFlag language={FlagEnums.ENGLISH} />
          ) : (
            <CustomFlag language={FlagEnums.FRENCH} />
          )}
        </Box>
      </Tooltip>
    </Slide>
  );
};

export default ChooseLanguage;
