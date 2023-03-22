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
  reducers: {
    cleanWarehouses: (state) => {
      state.warehouses = null;
      state.warehousesError = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWarehouses.pending.type, (state) => {
        state.warehousesLoading = true;
      })
      .addCase(
        fetchWarehouses.fulfilled.type,
        (state, action: PayloadAction<IWarehouses[]>) => {
          state.warehousesLoading = false;
          if (typeof action.payload === "object") {
            state.warehouses = action.payload;
          } else {
            state.warehousesError = action.payload;
          }
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

export const { cleanWarehouses } = warehousesSlice.actions;

export default warehousesSlice.reducer;
