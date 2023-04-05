import { RouterProvider } from "react-router-dom";
import { routing } from "./router/routing";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import useColorTheme from "./hooks/colorTheme";
import { ColorModeProvider } from "./context/themeContext";

function App() {
  const { colorMode, theme } = useColorTheme();

  return (
    <ColorModeProvider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routing} />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;
