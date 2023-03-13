import { useEffect } from "react";
import { fetchTracking } from "./api/trackingApi";
import { useAppDispatch } from "./hooks/dispatch";
import { useAppSelector } from "./hooks/selector";

const num = "20450638954971";

function App() {
  const { tracking, loading, error } = useAppSelector(
    (state) => state.tracking
  );
  console.log(tracking, loading, error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTracking(num));
  }, [dispatch, num]);

  return (
    <div className="App">
      <p>Hello!</p>
    </div>
  );
}

export default App;
