import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TTN_CHECK_PATTERN } from "../../constants/constants";
import CleanHistoryButton from "../buttons/CleanHistoryButton";
import TrackingHistoryItem from "./TrackingHistoryItem";
import { useTranslation } from "react-i18next";
import OpenMobileHistoryButton from "../buttons/OpenMobileHistoryButton";

interface HistoryProps {
  localStorageLength: number;
}

export default function TrackingHistory({ localStorageLength }: HistoryProps) {
  const { t } = useTranslation();
  const [trackingHistory, setTrackingHistory] = useState<string[]>([]);
  const [openHistory, setOpenHistory] = useState(false);

  useEffect(() => {
    const localStorageValues = Object.values(localStorage).filter((value) =>
      TTN_CHECK_PATTERN.test(value)
    );
    setTrackingHistory(localStorageValues);
  }, [localStorageLength]);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "200px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          gap: "6px",
        }}
      >
        <Typography color="primary" variant="h6">
          {t("history")}
        </Typography>
        <OpenMobileHistoryButton
          openHistory={openHistory}
          setOpenHistory={setOpenHistory}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { xs: !openHistory ? "none" : "flex", md: "flex" },
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "10px",
          borderColor: "primary.main",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "6px",
          backgroundColor: "background.paper",
          marginBottom: { xs: "40px", md: "0" },
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
            <CleanHistoryButton
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
  );
}
