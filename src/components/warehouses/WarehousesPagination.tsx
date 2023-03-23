import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../hooks/selector";
import { useAppDispatch } from "../../hooks/dispatch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { fetchWarehouses } from "../../api/warehousesApi";

type PaginationProps = {
  pageCount: number;
};

export default function WarehousesPagination({ pageCount }: PaginationProps) {
  const dispatch = useAppDispatch();
  const { warehouses } = useAppSelector((state) => state.warehouses);

  const [activePage, setActivePage] = useState(1);

  const pageHandleChange = (event: ChangeEvent<unknown>, value: number) => {
    setActivePage(value);
    if (warehouses) {
      dispatch(
        fetchWarehouses([warehouses.city, warehouses.type, value.toString()])
      );
    }
  };

  return (
    <>
      <Stack
        spacing={2}
        color="secondary"
        sx={{
          "& button": { color: "primary.main" },
          "& div": { color: "primary.main" },
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <Pagination
          count={pageCount}
          color="primary"
          page={activePage}
          onChange={pageHandleChange}
        />
      </Stack>
    </>
  );
}
