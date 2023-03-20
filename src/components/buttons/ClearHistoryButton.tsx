import { Dispatch, SetStateAction } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

type ButtonProps = {
  trackingHistory: string[];
  setTrackingHistory: Dispatch<SetStateAction<string[]>>;
};

export default function ClearHistoryButton({
  setTrackingHistory,
  trackingHistory,
}: ButtonProps) {
  const clearTrackingHistory = () => {
    trackingHistory.forEach((docNum) => localStorage.removeItem(docNum));
    setTrackingHistory([]);
  };

  return (
    <IconButton
      color="primary"
      aria-label="delete"
      size="medium"
      onClick={clearTrackingHistory}
      sx={{
        alignSelf: "center",
      }}
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}
