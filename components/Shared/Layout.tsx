import Footer from "@components/Shared/Footer";
import Navbar from "@components/Shared/Navbar";
import { Box, Container } from "@mui/material";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Container
          component="main"
          fixed
          sx={{
            flexGrow: 1,
          }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </React.Fragment>
  );
}
