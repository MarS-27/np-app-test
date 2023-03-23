import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import GoToHomepage from "../buttons/GoToHomepage";

type ErrorInfo = {
  errorInfo: string;
};

const errorStyles = {
  borderColor: "#d32f2f",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "6px",
  backgroundColor: "background.paper",
};

export default function Error({ errorInfo }: ErrorInfo) {
  return (
    <Box
      sx={
        errorInfo === "Упс, сторінку не знайдено"
          ? {
              ...errorStyles,
              width: "70%",
              padding: "20px",
              margin: "40px auto",
            }
          : { ...errorStyles, width: "100%", padding: "10px" }
      }
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
      {errorInfo === "Упс, сторінку не знайдено" && <GoToHomepage />}
    </Box>
  );
}
