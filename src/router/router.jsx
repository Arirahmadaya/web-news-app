import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";
import DetailBerita from "../pages/DetailBerita";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
  
      {
        path: "indonesia",
        element: <Indonesia />,
      },
      {
        path: "programming",
        element: <Programming />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "news/:id", 
        element: <DetailBerita />, 
      },
  
    ],
  },
]);

export default router;
