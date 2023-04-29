import "./App.css";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "@fontsource/lato";
import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar";

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
      <NavBar />
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
        <Main showBox={showBox} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
