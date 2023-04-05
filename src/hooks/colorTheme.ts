import { useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { ICustomTheme } from "../models/interfaces";
import { PaletteMode } from "@mui/material";

export default function useColorTheme() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme: ICustomTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#344df1" },
                secondary: { main: "#555555" },
                background: {
                  default: "#fafafa",
                  paper: "#eaeaea",
                },
              }
            : {
                primary: { main: "#ef6c00" },
                secondary: { main: "#ededed" },
                background: {
                  default: "#100e17",
                  paper: "#464545",
                },
              }),
        },
      }),
    [mode]
  );

  return { colorMode, theme };
}
