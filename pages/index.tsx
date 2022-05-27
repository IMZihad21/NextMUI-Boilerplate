import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Next.js with TypeScript and Material-UI
      </Typography>
    </Box>
  );
};

export default Home;
