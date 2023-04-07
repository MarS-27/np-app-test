import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export default function GoToHomepage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Link to="/">
        <Button variant="outlined">{t("goHome")}</Button>
      </Link>
    </Box>
  );
}
