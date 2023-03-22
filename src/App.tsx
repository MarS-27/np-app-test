import { RouterProvider } from "react-router-dom";
import { routing } from "./router/routing";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routing} />
    </ThemeProvider>
  );
}

export default App;
