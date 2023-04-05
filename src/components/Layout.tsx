import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <Outlet></Outlet>
      </Container>
    </>
  );
}
