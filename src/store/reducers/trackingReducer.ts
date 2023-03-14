import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTracking } from "../../api/trackingApi";
import { ITracking, ITrackingReducerState } from "../../models/interfaces";

const initialState: ITrackingReducerState = {
  tracking: null,
  trackingLoading: false,
  trackingError: null,
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTracking.pending.type, (state) => {
        state.trackingLoading = true;
      })
      .addCase(
        fetchTracking.fulfilled.type,
        (state, action: PayloadAction<ITracking>) => {
          state.trackingLoading = false;
          state.tracking = action.payload;
        }
      )
      .addCase(
        fetchTracking.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.trackingLoading = false;
          state.trackingError = action.payload;
        }
      );
  },
});

export default trackingSlice.reducer;
