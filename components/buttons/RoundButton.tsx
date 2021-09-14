import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';
import THEMES from '../../constants/themes';

interface Props {
  text?: string;
  icon?: JSX.Element;
  buttonStyle?: React.CSSProperties;
  onClick?(): void;
  invertedColor?: boolean;
}

const RoundButton: FC<Props> = (props) => {
  const { text, icon, buttonStyle, onClick, invertedColor } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        borderRadius: 50,
        borderColor: THEMES.dark.primary,
        backgroundColor: invertedColor ? THEMES.dark.primary : 'transparent',
        borderWidth: 3,
        color: THEMES.dark.white,
        textTransform: 'none',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft: 20,
        marginRight: 10,
        fontFamily: 'inherit',
        fontSize: 18,
        '&:hover': {
          backgroundColor: THEMES.dark.primary,
          color: THEMES.dark.white,
        },
        ...buttonStyle,
      },
    })
  );

  const classes = useStyles();

  return (
    <Button className={classes.button} variant="outlined" onClick={onClick}>
      {icon}
      {text}
    </Button>
  );
};

export default RoundButton;
