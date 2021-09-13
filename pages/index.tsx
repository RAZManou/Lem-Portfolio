import React, { useState, useEffect } from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Layout from '../components/layout/layout';
import { useTranslation } from 'react-i18next';
import THEMES from '../constants/themes';
import { NAME, FIRSTNAME, SECOND_FIRSTNAME } from '../constants/personalInfos';
import RoundButton from '../components/buttons/RoundButton';
import { useRouter } from 'next/router';
import { ROUTES } from '../constants/routes';
import FONT_SIZES from '../constants/fontSizes';

const duration = 1000;

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [opacityTitle, setOpacityTitle] = useState(0);
  const [opacityName, setOpacityName] = useState(0);
  const [opacityDesc, setOpacityDesc] = useState(0);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      jobTitle: {
        fontSize: FONT_SIZES.primaryTitle,
        fontWeight: 'bold',
        textAlign: 'center',
        ...defaultStyle,
        opacity: opacityTitle,
      },
      fullName: {
        fontSize: FONT_SIZES.secondaryTitle,
        textAlign: 'center',
        marginTop: 35,
        ...defaultStyle,
        opacity: opacityName,
      },
      introContainer: {
        textAlign: 'center',
        marginTop: 70,
        fontStyle: 'italic',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...defaultStyle,
        opacity: opacityDesc,
      },
      intro1And2: {
        display: 'flex',
        marginBottom: 10,
      },
      firstName: {
        marginLeft: 5,
        marginRight: 5,
        color: THEMES.dark.primary,
      },
      flexContainer: {
        display: 'flex',
      },
      intro3: {
        marginLeft: 5,
        marginRight: 5,
        color: THEMES.dark.primary,
      },
      buttonsContainer: {
        display: 'flex',
        marginTop: 25,
      },
    })
  );

  const classes = useStyles();

  useEffect(() => {
    setOpacityTitle(1);
    setTimeout(() => {
      setOpacityName(1);
    }, duration);
    setTimeout(() => {
      setOpacityDesc(1);
    }, duration * 2);
  }, []);

  const handleNavigateToAboutMe = () => {
    router.push(ROUTES.ABOUT);
  };

  const handleNavigateToCareer = () => {
    router.push(ROUTES.CAREER);
  };

  return (
    <Layout>
      <Box className={classes.container}>
        <Box className={classes.jobTitle}>{t('home.job.title')}</Box>
        <Box className={classes.fullName}>
          {`${FIRSTNAME} ${SECOND_FIRSTNAME} ${NAME}`}
        </Box>
        <Box className={classes.introContainer}>
          <Box className={classes.intro1And2}>
            {t('home.intro.1')}
            <Box className={classes.firstName}>{FIRSTNAME}</Box>
            {t('home.intro.2')}
          </Box>

          <Box className={classes.flexContainer}>
            <Box className={classes.intro3}>{t('home.intro.3')}</Box>
            {t('home.intro.4')}
          </Box>
        </Box>
        <Box className={classes.buttonsContainer}>
          <RoundButton
            text="My portfolio"
            buttonStyle={{
              borderColor: THEMES.dark.primary,
            }}
            onClick={handleNavigateToCareer}
          />
          <RoundButton
            text="Me"
            buttonStyle={{
              borderColor: THEMES.dark.primary,
              backgroundColor: THEMES.dark.primary,
            }}
            onClick={handleNavigateToAboutMe}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
