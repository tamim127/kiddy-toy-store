import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../components/Layouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/ToyData.json");
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "*", // catch-all route
    element: <h1 className="text-center text-3xl mt-20">Page Not Found</h1>,
  },
]);
