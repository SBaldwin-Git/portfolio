import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

function NavBar() {
  return (
    <AppBar position="static" sx={{ height: "0.2em" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", gap: "2em" }}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Home
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Projects
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          About
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar