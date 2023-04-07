import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import ThemeButton from "../buttons/ThemeButton";
import i18next from "i18next";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Header() {
  const onLanguageChange = (lang: "ua" | "en") => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "background.paper", zIndex: "999" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MailOutlineIcon color="primary" sx={{ display: "flex", mr: 2 }} />
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              color="primary"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              Tracking
            </Typography>
          </Link>
          <NavigationMobile />
          <Navigation />
          <ButtonGroup variant="text">
            <Button onClick={() => onLanguageChange("ua")}>UA</Button>
            <Button onClick={() => onLanguageChange("en")}>EN</Button>
          </ButtonGroup>
          <ThemeButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
