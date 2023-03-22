import { useEffect } from "react";
import { useAppSelector } from "../hooks/selector";
import { useAppDispatch } from "../hooks/dispatch";
import Box from "@mui/material/Box";
import Loader from "../components/loader/Loader";
import Error from "../components/error/Error";
import { fetchWarehousesTypes } from "../api/getWarehousesTypes";
import WarehousesSearchForm from "../components/forms/WarehousesSearchForm";
import WarehousesInfo from "../components/warehouses/WarehousesInfo";

export default function WarehousesPage() {
  const dispatch = useAppDispatch();

  const { warehouses, warehousesLoading, warehousesError } = useAppSelector(
    (state) => state.warehouses
  );
  console.log(warehouses, warehousesLoading, warehousesError);

  const { warehousesTypes, warehousesTypesLoading, warehousesTypesError } =
    useAppSelector((state) => state.warehousesTypes);

  useEffect(() => {
    dispatch(fetchWarehousesTypes());
  }, [dispatch]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 0",
      }}
    >
      {warehousesTypesLoading ? (
        <Loader />
      ) : warehousesTypes ? (
        <WarehousesSearchForm />
      ) : (
        warehousesTypesError && <Error errorInfo={warehousesTypesError} />
      )}

      {warehousesLoading ? (
        <Loader />
      ) : warehouses ? (
        <WarehousesInfo />
      ) : (
        warehousesError && <Error errorInfo={warehousesError} />
      )}
    </Box>
  );
}
