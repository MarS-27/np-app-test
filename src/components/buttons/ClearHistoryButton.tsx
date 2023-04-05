import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../hooks/dispatch";
import Button from "@mui/material/Button";
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
    <Button
      variant="outlined"
      sx={{
        height: "40px",
        width: "125px",
        marginTop: "10px",
        alignSelf: "center",
      }}
      startIcon={<DeleteIcon />}
      onClick={clearTrackingHistory}
    >
      Очистити
    </Button>
  );
}
