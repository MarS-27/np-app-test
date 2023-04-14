import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ColorModeContext from "../../context/themeContext";

export default function ThemeButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton
      sx={{ width: "50px", height: "50px", marginLeft: "10px" }}
      size="large"
      color="primary"
      onClick={colorMode.toggleColorMode}
    >
      {theme.palette.mode === "dark" ? (
        <WbSunnyIcon fontSize="medium" />
      ) : (
        <ModeNightIcon fontSize="medium" />
      )}
    </IconButton>
  );
}
