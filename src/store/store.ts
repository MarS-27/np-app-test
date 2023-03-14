import { configureStore } from "@reduxjs/toolkit";
import trackingReducer from "./reducers/trackingReducer";
import warehousesTypesReducer from "./reducers/warehousesTypesReducer";

export const store = configureStore({
  reducer: {
    tracking: trackingReducer,
    warehousesTypes: warehousesTypesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
