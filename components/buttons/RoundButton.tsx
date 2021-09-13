import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';
import THEMES from '../../constants/themes';

interface Props {
  text?: string;
  buttonStyle?: React.CSSProperties;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: 50,
      borderColor: THEMES.dark.white,
      color: THEMES.dark.white,
      textTransform: 'none',
      paddingTop: 0,
      paddingBottom: 0,
    },
  })
);

const RoundButton: FC<Props> = (props) => {
  const { text, buttonStyle } = props;
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      style={{
        ...buttonStyle,
      }}
      variant="outlined"
    >
      {text}
    </Button>
  );
};

export default RoundButton;
