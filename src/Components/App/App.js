import "./App.css";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "@fontsource/lato";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
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
          <Routes>
            <Route path="/" element={<Home showBox={showBox} />} />
            <Route path="/about" element={<About showBox={showBox} />} />
            <Route path="/projects" element={<Projects showBox={showBox} />} />
          </Routes>

          {/* <Home showBox={showBox} /> */}
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
