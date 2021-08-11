import React, { FC } from "react";
import { Container, Box } from "@material-ui/core";
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
        minHeight: "100vh",
      }}
      maxWidth={false}
    >
      <NavigationBar />
      <Box
        style={{
          width: "100vw",
          height: "calc(100vh - 80px)",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
