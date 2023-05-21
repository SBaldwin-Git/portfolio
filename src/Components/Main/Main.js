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
            whiteSpace: "pre-line",
            fontSize: "7rem",
          }}
        >
          Sam Baldwin
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",
            mt: "1rem",
          }}
        >
          Junior Full-Stack Developer
        </Typography>
      </Box>
    </Fade>
  );
}

export default Main;
