import { RouterProvider } from "react-router-dom";
import { routing } from "./router/routing";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import useColorTheme from "./hooks/colorTheme";
import { ColorModeProvider } from "./context/themeContext";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { i18Config } from "./i18n/config";

i18next.use(initReactI18next).init(i18Config);

function App() {
  const { colorMode, theme } = useColorTheme();

  return (
    <I18nextProvider i18n={i18next}>
      <ColorModeProvider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={routing} />
        </ThemeProvider>
      </ColorModeProvider>
    </I18nextProvider>
  );
}

export default App;
