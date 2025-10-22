import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../components/Layouts/MainLayouts";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayouts/>,
  },
]);
