import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTracking } from "../../api/trackingApi";
import {
  ITracking,
  ITrackingReducerInitialState,
} from "../../models/interfaces";

const initialState: ITrackingReducerInitialState = {
  tracking: null,
  loading: false,
  error: null,
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTracking.pending.type, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTracking.fulfilled.type,
        (state, action: PayloadAction<ITracking>) => {
          state.loading = false;
          state.tracking = action.payload;
        }
      )
      .addCase(
        fetchTracking.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default trackingSlice.reducer;
