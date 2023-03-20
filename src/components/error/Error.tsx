import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ErrorInfo = {
  errorInfo: string;
};

export default function Error({ errorInfo }: ErrorInfo) {
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
        {errorInfo}!
      </Typography>
    </Box>
  );
}
