import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();

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
        <Button sx={{ my: 2, display: "block" }}>{t("tracking")}</Button>
      </NavLink>
      <NavLink to="/warehouses">
        <Button sx={{ my: 2, display: "block" }}>{t("warehouses")}</Button>
      </NavLink>
    </Box>
  );
}
