import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../hooks/dispatch";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { cleanTracking } from "../../store/reducers/trackingReducer";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

type ButtonProps = {
  trackingHistory: string[];
  setTrackingHistory: Dispatch<SetStateAction<string[]>>;
};

export default function CleanHistoryButton({
  setTrackingHistory,
  trackingHistory,
}: ButtonProps) {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const cleanTrackingHistory = () => {
    trackingHistory.forEach((docNum) => localStorage.removeItem(docNum));
    dispatch(cleanTracking());
    setTrackingHistory([]);
  };

  return (
    <Box
      sx={{
        width: "168px",
        display: "flex",
        justifyContent: "center",
        marginTop: { xs: "0", md: "8px" },
      }}
    >
      <Button
        variant="outlined"
        sx={{
          height: "40px",
          width: "125px",
        }}
        startIcon={<DeleteIcon />}
        onClick={cleanTrackingHistory}
      >
        {t("clean")}
      </Button>
    </Box>
  );
}
