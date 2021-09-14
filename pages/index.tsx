import React from 'react';
import { Box, createStyles, Grow, makeStyles, Theme } from '@material-ui/core';
import Layout from '../components/layout/layout';
import { useTranslation } from 'react-i18next';
import THEMES from '../constants/themes';
import { NAME, FIRSTNAME, SECOND_FIRSTNAME } from '../constants/personalInfos';
import RoundButton from '../components/buttons/RoundButton';
import { useRouter } from 'next/router';
import { ROUTES } from '../constants/routes';
import FONT_SIZES from '../constants/fontSizes';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const duration = 1000;

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 80px)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      jobTitle: {
        fontSize: FONT_SIZES.primaryTitle,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      fullName: {
        fontSize: FONT_SIZES.secondaryTitle,
        textAlign: 'center',
        marginTop: 35,
      },
      introContainer: {
        textAlign: 'center',
        marginTop: 70,
        fontStyle: 'italic',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

  const handleNavigateToAboutMe = () => {
    router.push(ROUTES.ABOUT);
  };

  const handleNavigateToCareer = () => {
    router.push(ROUTES.CAREER);
  };

  return (
    <Layout>
      <Box className={classes.container}>
        <Grow in={true}>
          <Box className={classes.jobTitle}>{t('home.job.title')}</Box>
        </Grow>
        <Grow in={true} timeout={duration}>
          <Box className={classes.fullName}>
            {`${FIRSTNAME} ${SECOND_FIRSTNAME} ${NAME}`}
          </Box>
        </Grow>
        <Grow in={true} timeout={duration * 2}>
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
        </Grow>
        <Grow in={true} timeout={duration * 3}>
          <Box className={classes.buttonsContainer}>
            <RoundButton
              text={t('home.my.portfolio')}
              onClick={handleNavigateToCareer}
            />
            <RoundButton
              icon={<PlayArrowIcon fontSize="large" />}
              invertedColor
              onClick={handleNavigateToAboutMe}
            />
          </Box>
        </Grow>
      </Box>
    </Layout>
  );
};

export default Home;
