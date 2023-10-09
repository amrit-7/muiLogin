import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LoginPage from "../Pages/LoginPage";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#018383",
      dark: "#016A70",
      light: "#38A3A5",
    },
    secondary: {
      main: "#F9AB3C",
      dark: "#F29727",
      light: "#FBEEAC",
    },
    neutral: {
      main: "#F3F9FA",
    },
  },
  typography: {
    fontFamily: ["'Roboto', sans-serif"],
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoginPage />
      </ThemeProvider>
    </>
  );
}
export default App;
