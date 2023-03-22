import { useEffect } from "react";
import { useAppSelector } from "../../hooks/selector";
import { useAppDispatch } from "../../hooks/dispatch";
import Box from "@mui/material/Box";

export default function WarehousesInfo() {
  //   const dispatch = useAppDispatch();

  const { warehouses } = useAppSelector((state) => state.warehouses);
  console.log(warehouses);

  //   useEffect(() => {
  //     dispatch(fetchWarehousesTypes());
  //   }, []);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px 0",
        color: "secondary.main",
      }}
    >
      Found!
    </Box>
  );
}
