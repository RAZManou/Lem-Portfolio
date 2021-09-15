import { Box, createStyles, Fade, makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import profilePic from '../../public/me.png';
import Image from 'next/image';

interface Props {
  opacity?: number;
  style?: React.CSSProperties;
  onClick?(): void;
}

const ProfilePic: FC<Props> = (props) => {
  const { style, onClick, opacity } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      image: {
        opacity: opacity || 0.8,
        ...style,
      },
    })
  );

  const classes = useStyles();

  return (
    <Fade in timeout={1000}>
      <Box>
        <Image
          src={profilePic}
          layout="responsive"
          alt="Picture of the author"
          className={classes.image}
          onClick={onClick}
        />
      </Box>
    </Fade>
  );
};

export default ProfilePic;
