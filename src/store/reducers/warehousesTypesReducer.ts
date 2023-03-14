import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWarehousesTypes } from "../../api/getWarehousesTypes";
import {
  IWarehousesTypes,
  IWarehousesTypesReducerState,
} from "../../models/interfaces";

const initialState: IWarehousesTypesReducerState = {
  warehousesTypes: null,
  warehousesTypesLoading: false,
  warehousesTypesError: null,
};

const warehousesTypesSlice = createSlice({
  name: "warehousesTypes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWarehousesTypes.pending.type, (state) => {
        state.warehousesTypesLoading = true;
      })
      .addCase(
        fetchWarehousesTypes.fulfilled.type,
        (state, action: PayloadAction<IWarehousesTypes>) => {
          state.warehousesTypesLoading = false;
          state.warehousesTypes = action.payload;
        }
      )
      .addCase(
        fetchWarehousesTypes.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.warehousesTypesLoading = false;
          state.warehousesTypesError = action.payload;
        }
      );
  },
});

export default warehousesTypesSlice.reducer;
