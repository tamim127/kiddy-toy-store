import { createBrowserRouter } from "react-router";
import MainLayouts from "../components/Layouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import ToyDetails from "../Pages/ToyDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AllToys from "../Pages/AllToys";
import FAQs from "../Pages/FAQs";
import MeetTheTeam from "../Pages/MeetTheTeam";
import SupportSection from "../Pages/SupportSection";
import Careers from "../Pages/Careers";
import OurStory from "../Pages/ourStory";

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

      // Protected pages
      {
        path: "/myprofile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/home/:id",
        element: <ToyDetails />,
      },

      // Public pages
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgetpassword", element: <ForgetPassword /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () => fetch("/ToyData.json"),
      },
      { path: "/faq", element: <FAQs /> },
      { path: "/meet-team", element: <MeetTheTeam /> },
      { path: "/support", element: <SupportSection /> },
      { path: "/career", element: <Careers /> },
      { path: "/our-story", element: <OurStory /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
