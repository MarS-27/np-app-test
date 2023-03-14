import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import TrackingPage from "../pages/trackingPage";
import WarehousesPage from "../pages/warehousesPage";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TrackingPage />,
      },
      {
        path: "warehouses",
        element: <WarehousesPage />,
      },
    ],
  },
]);
