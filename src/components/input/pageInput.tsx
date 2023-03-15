import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PageInput() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "90%",
        margin: "0 auto 20px auto",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Введіть номер ТТН"
        variant="outlined"
        type="text"
        className="search-input"
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "6px",
          color: "aqua",
        }}
      />
      <Button
        sx={{ height: "40px", minWidth: "121px" }}
        type="submit"
        variant="contained"
      >
        Статус ТТН
      </Button>
    </Box>
  );
}
