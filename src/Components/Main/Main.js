import React from "react";
import { Box, Typography, Fade } from "@mui/material";

function Main(props) {
  return (
    <Fade in={props.showBox} timeout={3000}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: "0.5rem",
            p: "1rem",
          }}
        >
          Hello World!
        </Typography>
      </Box>
    </Fade>
  );
}

export default Main;