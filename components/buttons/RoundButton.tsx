import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';
import THEMES from '../../constants/themes';

interface Props {
  text?: string;
  buttonStyle?: React.CSSProperties;
  onClick?(): void;
}

const RoundButton: FC<Props> = (props) => {
  const { text, buttonStyle, onClick } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        borderRadius: 50,
        borderColor: THEMES.dark.white,
        color: THEMES.dark.white,
        textTransform: 'none',
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 10,
        marginRight: 10,
        fontFamily: 'inherit',
        ...buttonStyle,
      },
    })
  );

  const classes = useStyles();

  return (
    <Button className={classes.button} variant="outlined" onClick={onClick}>
      {text}
    </Button>
  );
};

export default RoundButton;
