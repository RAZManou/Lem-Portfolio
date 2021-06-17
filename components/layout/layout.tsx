import React, { FC } from "react";
import { Container } from "@material-ui/core";
import NavigationBar from "./navigationBar/navigationBar";

const BackgroundPath = "/home_background_image.png";

const Layout: FC = ({ children }) => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundPosition: "center",
        backgroundImage: `url(${BackgroundPath})`,
        minHeight: "-webkit-fill-available",
      }}
      maxWidth={false}
    >
      <NavigationBar />
      {children}
    </Container>
  );
};

export default Layout;
