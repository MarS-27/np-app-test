import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function GoToHomepage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Link to="/">
        <Button variant="outlined">На головну</Button>
      </Link>
    </Box>
  );
}
