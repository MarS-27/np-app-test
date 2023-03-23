import { useAppSelector } from "../../hooks/selector";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WarehousesInfo() {
  const { warehouses } = useAppSelector((state) => state.warehouses);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "80%" },
        margin: "0 auto",
        padding: "10px 20px",
        borderColor: "primary.main",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "6px",
        backgroundColor: "background.paper",
      }}
    >
      {warehouses?.data.map((warehouse) => (
        <Typography
          key={warehouse.description}
          color="secondary"
          variant="body1"
          sx={{
            padding: "10px 0",
            borderBottomColor: "secondary.main",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            ":last-of-type": { borderBottom: "none" },
          }}
        >
          {warehouse.description}.
        </Typography>
      ))}
    </Box>
  );
}
