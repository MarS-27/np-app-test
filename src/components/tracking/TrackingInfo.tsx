import { useAppSelector } from "../../hooks/selector";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TrackingInfo() {
  const { tracking } = useAppSelector((state) => state.tracking);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        borderColor: "primary.main",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "6px",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          paddingBottom: "10px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography color="primary" variant="body1" sx={{ minWidth: "150px" }}>
          Статус доставки:
        </Typography>
        <Typography color="secondary" variant="body1">
          {tracking?.status}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "10px",
          paddingY: "10px",
          borderTopColor: "secondary.main",
          borderBottomColor: "secondary.main",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
        }}
      >
        <Typography color="primary" variant="body1" sx={{ minWidth: "150px" }}>
          Адреса відправки:
        </Typography>
        <Typography color="secondary" variant="body1">
          м. {tracking?.citySender}. {tracking?.warehouseSender}.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          paddingTop: "10px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography color="primary" variant="body1" sx={{ minWidth: "150px" }}>
          Адреса отримання:
        </Typography>
        <Typography color="secondary" variant="body1">
          м. {tracking?.cityRecipient}. {tracking?.warehouseRecipient}.
        </Typography>
      </Box>
    </Box>
  );
}
