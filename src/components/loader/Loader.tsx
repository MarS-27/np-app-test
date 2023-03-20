import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Loader() {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        paddingTop: "40px",
        textAlign: "center",
        color: "",
      }}
    >
      <Typography color="primary" variant="body1">
        Loading...
      </Typography>
    </Box>
  );
}
