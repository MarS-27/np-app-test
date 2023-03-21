import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TTN_CHECK_PATTERN } from "../../constants/constants";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../hooks/dispatch";
import { fetchTracking } from "../../api/trackingApi";
import { cleanTracking } from "../../store/reducers/trackingReducer";
import ClearHistoryButton from "../buttons/ClearHistoryButton";

interface HistoryProps {
  localStorageLength: number;
}

export default function TrackingHistory({ localStorageLength }: HistoryProps) {
  const dispatch = useAppDispatch();

  const [trackingHistory, setTrackingHistory] = useState<string[]>([]);

  const clickOnDocNumber = (docNum: string) => {
    dispatch(cleanTracking());
    dispatch(fetchTracking(docNum));
  };

  useEffect(() => {
    const localStorageValues = Object.values(localStorage).filter((value) =>
      TTN_CHECK_PATTERN.test(value)
    );
    setTrackingHistory(localStorageValues);
  }, [localStorageLength]);

  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "20%" } }}>
        <Typography
          color="primary"
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "10px" }}
        >
          Історія
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            flexWrap: { xs: "wrap" },
            justifyContent: "space-between",
            padding: "10px",
            borderColor: "primary.main",
            borderWidth: "2px",
            borderStyle: "solid",
            borderRadius: "6px",
            backgroundColor: "background.paper",
          }}
        >
          {trackingHistory.length ? (
            <>
              {trackingHistory.map((docNum) => (
                <Button
                  key={docNum}
                  sx={{ height: "40px", width: { xs: "130px", md: "100%" } }}
                  variant="text"
                  color="secondary"
                  onClick={() => clickOnDocNumber(docNum)}
                >
                  {docNum}
                </Button>
              ))}
              <ClearHistoryButton
                setTrackingHistory={setTrackingHistory}
                trackingHistory={trackingHistory}
              />
            </>
          ) : (
            <Typography color="secondary" variant="body2" textAlign="center">
              Ви нічого не відстежували
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
