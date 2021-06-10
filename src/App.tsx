import React from "react";
import "./App.css";
import "./Services/translations/i18n";
import HomeScreen from "./Screens/HomeScreen";
import {
  makeStyles,
  createStyles,
  Container,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import Background from "./Images/Backgrounds/home_background_image.png";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const useStyles = makeStyles(() =>
  createStyles({
    rootContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundPosition: "center",
      backgroundImage: `url(${Background})`,
      minHeight: "-webkit-fill-available",
    },
  })
);

const App = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3E3D40",
      },
      secondary: {
        main: "#FF4340",
      },
      info: {
        main: "#E2E6EA",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.rootContainer} maxWidth={false}>
        <NavigationBar />
        <HomeScreen />
      </Container>
    </ThemeProvider>
  );
};

export default App;
