import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        This is a demo footer @2022
      </Typography>
    </Box>
  );
}
