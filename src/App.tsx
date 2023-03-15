import { useEffect } from "react";
import { fetchWarehousesTypes } from "./api/getWarehousesTypes";
import { fetchTracking } from "./api/trackingApi";
import { fetchWarehouses } from "./api/warehousesApi";
import { useAppDispatch } from "./hooks/dispatch";
import { useAppSelector } from "./hooks/selector";
import { RouterProvider } from "react-router-dom";
import { routing } from "./router/routing";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";

const num = "20450638954971";
const city = "Київ";
const typeOFWarehouse = "6f8c7162-4b72-4b0a-88e5-906948c6a92f";

function App() {
  const dispatch = useAppDispatch();

  // const { tracking, trackingError, trackingLoading } = useAppSelector(
  //   (state) => state.tracking
  // );

  // const { warehousesTypes, warehousesTypesLoading, warehousesTypesError } =
  //   useAppSelector((state) => state.warehousesTypes);

  // const { warehouses, warehousesLoading, warehousesError } = useAppSelector(
  //   (state) => state.warehouses
  // );
  // console.log(warehousesTypes);
  // // console.log(warehouses);

  useEffect(() => {
    dispatch(fetchTracking(num));
    dispatch(fetchWarehouses([city, typeOFWarehouse]));
    dispatch(fetchWarehousesTypes());
  }, [dispatch, num]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routing} />
    </ThemeProvider>
  );
}

export default App;
