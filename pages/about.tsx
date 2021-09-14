import { useTranslation } from 'react-i18next';
import ScreenTitle from '../components/titles/ScreenTitle';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import profilePic from '../public/me.png';
import Image from 'next/image';

const ImagePath = '/home_background_image.jpg';

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
      image: {
        opacity: 0.8,
      },
      aboutMe: {
        paddingLeft: 100,
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <ScreenTitle
        title={t('menu.about')}
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
      />

      <Box className={classes.container}>
        <Box className={classes.profilPic}>
          <Image
            src={profilePic}
            layout="responsive"
            alt="Picture of the author"
            className={classes.image}
          />
        </Box>
        <Box className={classes.aboutMe}>
          <ScreenTitle
            title="Sous titres"
            subTitle="In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit"
            alignText="left"
            noDivider
            containerStyle={{ marginTop: 0 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default About;
