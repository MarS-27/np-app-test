import { useEffect } from "react";
import { fetchWarehousesTypes } from "./api/getWarehousesTypes";
import { fetchTracking } from "./api/trackingApi";
import { test } from "./api/warehousesApi";
import { useAppDispatch } from "./hooks/dispatch";
import { useAppSelector } from "./hooks/selector";

const num = "20450638954971";
const city = "Київ";

function App() {
  const dispatch = useAppDispatch();

  const { tracking, trackingError, trackingLoading } = useAppSelector(
    (state) => state.tracking
  );

  const { warehousesTypes, warehousesTypesLoading, warehousesTypesError } =
    useAppSelector((state) => state.warehousesTypes);

  console.log(warehousesTypes);

  useEffect(() => {
    dispatch(fetchTracking(num));
    test(city);
    dispatch(fetchWarehousesTypes());
  }, [dispatch, num]);

  return (
    <div className="App">
      <p>Hello!</p>
    </div>
  );
}

export default App;
