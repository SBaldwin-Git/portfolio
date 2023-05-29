import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <AppBar position="static" sx={{ height: "0.2em" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", gap: "2em" }}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          <Link to="/">
            Home
          </Link>
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          <Link to="/projects" >
            Projects
          </Link>
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem"}}>
          <Link to="/about" >
            About
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
