import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../components/Layouts/MainLayouts";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
