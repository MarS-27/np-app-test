import { useAppSelector } from "../hooks/selector";
import Box from "@mui/material/Box";
import TrackingInfo from "../components/tracking/TrackingInfo";
import DocumentNumberForm from "../components/forms/DocNumForm";
import Loader from "../components/loader/Loader";
import Error from "../components/error/Error";
import TrackingHistory from "../components/tracking/TrackingHistory";

export default function TrackingPage() {
  const { tracking, trackingError, trackingLoading } = useAppSelector(
    (state) => state.tracking
  );
  const localStorageLength = localStorage.length;

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: { xs: "10px", md: "20px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
        }}
      >
        <DocumentNumberForm />
        {trackingLoading ? (
          <Loader />
        ) : tracking ? (
          <TrackingInfo />
        ) : (
          trackingError && <Error errorInfo={trackingError} />
        )}
      </Box>
      <TrackingHistory localStorageLength={localStorageLength} />
    </Box>
  );
}
