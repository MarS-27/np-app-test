import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "background.paper" }}>
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
              Tracking App
            </Typography>
          </Link>
          <NavigationMobile />
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
