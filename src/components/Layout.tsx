import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          display: "flex",
          flexGrow: "1",
          backgroundColor: "background.default",
          marginTop: "40px",
        }}
      >
        <Outlet></Outlet>
      </Container>
      <Footer />
    </>
  );
}
