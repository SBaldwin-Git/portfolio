import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

function App() {
  return(
    <ThemeProvider theme={theme}>
    <Container>
      <Box>
        <Typography variant="h1" sx={{fontFamily: 'Lato'}}>Hello world</Typography>
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;