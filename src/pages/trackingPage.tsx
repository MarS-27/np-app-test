import { useEffect } from "react";
import { fetchTracking } from "../api/trackingApi";
import { useAppDispatch } from "../hooks/dispatch";
import Box from "@mui/material/Box";
import TrackingInfo from "../components/tracking/TrackingInfo";

const num = "20450638954971";

export default function TrackingPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTracking(num));
  }, [dispatch, num]);

  return (
    <Box
      component="section"
      sx={{ width: "90%", margin: "0 auto", paddingTop: "40px" }}
    >
      <TrackingInfo />
    </Box>
  );
}
