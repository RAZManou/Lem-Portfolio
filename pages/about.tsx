import { useTranslation } from 'react-i18next';
import ScreenTitle from '../components/titles/ScreenTitle';
import { Box, createStyles, makeStyles, Slide, Theme } from '@material-ui/core';
import React from 'react';
import Info from '../components/info/Info';
import ProfilePic from '../components/images/ProfilePic';
import { defaultTimeout } from '../constants/animations';
import myPersonalInfos, { getMyAge } from '../constants/personalInfos';

const About = () => {
  const { t } = useTranslation();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: 50,
      },
      profilPic: {
        minWidth: '35%',
      },
      aboutMeContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 100,
      },
      aboutMe: {
        paddingLeft: 100,
      },
      infoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <Slide in direction="right" timeout={defaultTimeout / 2}>
        <Box>
          <ScreenTitle
            title={t('menu.about')}
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
          />
        </Box>
      </Slide>

      <Box className={classes.container}>
        <Box className={classes.profilPic}>
          <ProfilePic />
        </Box>
        <Slide in direction="left" timeout={defaultTimeout}>
          <Box className={classes.aboutMeContainer}>
            <Box>
              <ScreenTitle
                title="Sous titres"
                subTitle="In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit"
                alignText="left"
                noDivider
                containerStyle={{ marginTop: 0 }}
              />
            </Box>
            <Box className={classes.infoContainer}>
              <Info
                label={t('common.name')}
                value={`${myPersonalInfos.FULL_NAME}`}
              />
              <Info label={t('common.age')} value={`${getMyAge()} ans`} />
              <Info label={t('common.email')} value={myPersonalInfos.EMAIL} />
              <Info
                label={t('common.phone')}
                value={myPersonalInfos.PHONE_TELMA}
              />
              <Info
                label={t('common.linkedin')}
                value={myPersonalInfos.LINKEDIN_NAME}
              />
              <Info
                label={t('common.skype.pseudo')}
                value={myPersonalInfos.SKYPE_PRO_PSEUDO}
              />
            </Box>
          </Box>
        </Slide>
      </Box>
    </>
  );
};

export default About;
