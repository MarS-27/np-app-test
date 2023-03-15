import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
        gap: "20px",
      }}
    >
      <NavLink to="/">
        <Button color="primary" sx={{ my: 2, display: "block" }}>
          Трекінг
        </Button>
      </NavLink>
      <NavLink to="/warehouses">
        <Button color="primary" sx={{ my: 2, display: "block" }}>
          Відділення
        </Button>
      </NavLink>
    </Box>
  );
}
