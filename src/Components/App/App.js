import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <Box>
          <Typography variant="h1" sx={{backgroundColor: "secondary.main", borderRadius: "0.5rem", p: "1rem"}}>
            Hello World!
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
