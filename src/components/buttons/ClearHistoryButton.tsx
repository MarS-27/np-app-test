import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../hooks/dispatch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { cleanTracking } from "../../store/reducers/trackingReducer";

type ButtonProps = {
  trackingHistory: string[];
  setTrackingHistory: Dispatch<SetStateAction<string[]>>;
};

export default function ClearHistoryButton({
  setTrackingHistory,
  trackingHistory,
}: ButtonProps) {
  const dispatch = useAppDispatch();

  const clearTrackingHistory = () => {
    trackingHistory.forEach((docNum) => localStorage.removeItem(docNum));
    dispatch(cleanTracking());
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
