import "./App.css";
import { Box, Container, Typography, Fade } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  palette: {
    primary: {
      main: "#ebebeb",
    },
    secondary: {
      main: "#FF6D1B",
    },
  },
});

function App() {
  const [showBox, setShowBox] = React.useState(false);

  React.useEffect(() => {
    setShowBox(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "primary.main",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={showBox} timeout={3000}>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
