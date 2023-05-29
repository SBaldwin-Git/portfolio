import { Box, Typography } from "@mui/material";
import React from "react";
import selfie from "./selfie.jpg";
import "./About.css";

function About() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <figure>
        <img src={selfie} alt="Selfie of me!" />
        <figcaption>Having a lovely stroll through Kew Gardens!</figcaption>
      </figure>
      <Typography variant="h1" sx={{ fontSize: "3rem" }}>
        Hello! My name is Sam Baldwin, and I'm a Junior Software Developer.
      </Typography>
    </Box>
  );
}

export default About;
