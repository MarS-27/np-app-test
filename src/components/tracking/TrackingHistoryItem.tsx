import { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../hooks/dispatch";
import { fetchTracking } from "../../api/trackingApi";
import { cleanTracking } from "../../store/reducers/trackingReducer";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

type HistoryItemProps = {
  trackingHistory: string[];
  setTrackingHistory: Dispatch<SetStateAction<string[]>>;
  docNum: string;
};

export default function TrackingHistoryItem({
  docNum,
  setTrackingHistory,
  trackingHistory,
}: HistoryItemProps) {
  const dispatch = useAppDispatch();

  const clickOnDocNumber = () => {
    dispatch(cleanTracking());
    dispatch(fetchTracking(docNum));
  };

  const deleteDocNum = () => {
    localStorage.removeItem(docNum);
    setTrackingHistory(trackingHistory.filter((num) => num !== docNum));
  };

  return (
    <Box sx={{ display: "flex", gap: "5px" }}>
      <Button
        sx={{
          height: "40px",
          width: { xs: "130px", md: "100%" },
        }}
        variant="text"
        color="secondary"
        onClick={clickOnDocNumber}
      >
        {docNum}
      </Button>
      <IconButton
        color="primary"
        aria-label="delete"
        size="small"
        onClick={deleteDocNum}
        sx={{
          alignSelf: "center",
        }}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
