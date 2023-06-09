import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTracking } from "../../api/trackingApi";
import { ITracking, ITrackingReducerState } from "../../models/interfaces";

const initialState: ITrackingReducerState = {
  tracking: null,
  trackingLoading: false,
  trackingError: "",
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    cleanTracking: (state) => {
      state.tracking = null;
      state.trackingError = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTracking.pending.type, (state) => {
        state.trackingLoading = true;
      })
      .addCase(
        fetchTracking.fulfilled.type,
        (state, action: PayloadAction<ITracking>) => {
          state.trackingLoading = false;
          if (typeof action.payload === "object") {
            state.tracking = action.payload;
          } else {
            state.trackingError = action.payload;
          }
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

export const { cleanTracking } = trackingSlice.actions;

export default trackingSlice.reducer;
