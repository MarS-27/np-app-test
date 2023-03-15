import { createTheme } from "@mui/material/styles";
import { ICustomTheme } from "../models/interfaces";

export const theme: ICustomTheme = createTheme({
  palette: {
    primary: { main: "#ef6c00" },
    secondary: { main: "#c9c9c9" },
    background: {
      default: "#100e17",
      paper: "#464545",
    },
  },
});
