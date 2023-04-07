import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TTN_CHECK_PATTERN } from "../../constants/constants";
import ClearHistoryButton from "../buttons/ClearHistoryButton";
import TrackingHistoryItem from "./TrackingHistoryItem";
import { useTranslation } from "react-i18next";

interface HistoryProps {
  localStorageLength: number;
}

export default function TrackingHistory({ localStorageLength }: HistoryProps) {
  const { t } = useTranslation();
  const [trackingHistory, setTrackingHistory] = useState<string[]>([]);

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
          {t("history")}
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
                <TrackingHistoryItem
                  key={docNum}
                  docNum={docNum}
                  setTrackingHistory={setTrackingHistory}
                  trackingHistory={trackingHistory}
                />
              ))}
              <ClearHistoryButton
                setTrackingHistory={setTrackingHistory}
                trackingHistory={trackingHistory}
              />
            </>
          ) : (
            <Typography color="secondary" variant="body2" textAlign="center">
              {t("emptyHistory")}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
