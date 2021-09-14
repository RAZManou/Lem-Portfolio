import Layout from '../components/layout/layout';
import { useTranslation } from 'react-i18next';
import ScreenTitle from '../components/titles/ScreenTitle';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import profilePic from '../public/me.jpeg';
import Image from 'next/image';

const ImagePath = '/home_background_image.jpg';

const About = () => {
  const { t } = useTranslation();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        paddingLeft: 200,
        paddingRight: 200,
        marginTop: 50,
      },
      profilPic: {
        width: '40%',
      },
      aboutMe: {
        paddingLeft: 100,
      },
    })
  );

  const classes = useStyles();

  return (
    <Layout>
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
          />
        </Box>
        <Box className={classes.aboutMe}>
          <ScreenTitle
            title="Sous titres"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
            alignText="left"
            noDivider
            containerStyle={{ marginTop: 0 }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
