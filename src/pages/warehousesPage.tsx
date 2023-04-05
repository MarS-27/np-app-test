import { useEffect, useMemo } from "react";
import { useAppSelector } from "../hooks/selector";
import { useAppDispatch } from "../hooks/dispatch";
import Box from "@mui/material/Box";
import Loader from "../components/loader/Loader";
import Error from "../components/error/Error";
import { fetchWarehousesTypes } from "../api/getWarehousesTypes";
import WarehousesSearchForm from "../components/forms/WarehousesSearchForm";
import WarehousesInfo from "../components/warehouses/WarehousesInfo";
import {
  WAREHOUSES_ON_PAGE,
  WAREHOUSES_START_PAGE,
} from "../constants/constants";
import WarehousesPagination from "../components/warehouses/WarehousesPagination";

export default function WarehousesPage() {
  const dispatch = useAppDispatch();

  const { warehouses, warehousesLoading, warehousesError } = useAppSelector(
    (state) => state.warehouses
  );

  const { warehousesTypes, warehousesTypesLoading, warehousesTypesError } =
    useAppSelector((state) => state.warehousesTypes);

  const pageCount = useMemo(() => {
    if (warehouses?.totalCount) {
      return Math.ceil(warehouses.totalCount / WAREHOUSES_ON_PAGE);
    }
  }, [warehouses?.totalCount]);

  useEffect(() => {
    dispatch(fetchWarehousesTypes());
  }, [dispatch]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      {warehousesTypesLoading ? (
        <Loader />
      ) : warehousesTypes ? (
        <WarehousesSearchForm />
      ) : (
        warehousesTypesError && <Error errorInfo={warehousesTypesError} />
      )}

      {pageCount && pageCount > +WAREHOUSES_START_PAGE && (
        <WarehousesPagination pageCount={pageCount} />
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
