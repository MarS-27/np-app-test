import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

export default function Footer() {
  return (
    <AppBar
      position="static"
      component="footer"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        padding: "10px 0",
        backgroundColor: "background.paper",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "6px",
          }}
        >
          <IconButton
            size="medium"
            href="https://github.com/MarS-27"
            target="_blank"
            color="primary"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            size="medium"
            href="https://www.linkedin.com/in/sergii-marchuk/"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
}
