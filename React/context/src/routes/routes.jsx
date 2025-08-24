import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../Components/layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);
