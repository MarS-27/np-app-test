import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type ErrorInfo = {
  errorInfo: string;
};

export default function Error({ errorInfo }: ErrorInfo) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        borderColor: "#d32f2f",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "6px",
        backgroundColor: "background.paper",
      }}
    >
      <ErrorOutlineIcon
        color="error"
        sx={{
          display: "block",
          width: "60px",
          height: "60px",
          margin: "0 auto 20px auto",
        }}
      />
      <Typography color="error" textAlign="center" variant="body1">
        {errorInfo}!
      </Typography>
    </Box>
  );
}
