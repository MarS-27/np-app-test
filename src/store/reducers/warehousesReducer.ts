import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWarehouses } from "../../api/warehousesApi";
import { IWarehouses, IWarehousesReducerState } from "../../models/interfaces";

const initialState: IWarehousesReducerState = {
  warehouses: null,
  warehousesLoading: false,
  warehousesError: "",
};

const warehousesSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWarehouses.pending.type, (state) => {
        state.warehousesLoading = true;
      })
      .addCase(
        fetchWarehouses.fulfilled.type,
        (state, action: PayloadAction<IWarehouses>) => {
          state.warehousesLoading = false;
          state.warehouses = action.payload;
        }
      )
      .addCase(
        fetchWarehouses.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.warehousesLoading = false;
          state.warehousesError = action.payload;
        }
      );
  },
});

export default warehousesSlice.reducer;
