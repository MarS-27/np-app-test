import { createHashRouter } from "react-router-dom";
import Error from "../components/error/Error";
import Layout from "../components/Layout";
import TrackingPage from "../pages/trackingPage";
import WarehousesPage from "../pages/warehousesPage";

export const routing = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error errorInfo="Упс, сторінку не знайдено" />,
    children: [
      {
        index: true,
        element: <TrackingPage />,
      },
      {
        path: "/warehouses",
        element: <WarehousesPage />,
      },
    ],
  },
]);
