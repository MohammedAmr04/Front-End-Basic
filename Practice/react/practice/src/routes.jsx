import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import App from "./App";
import AboutProduct from "./components/AboutProduct";
import Product from "./components/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Error </div>,
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "about",
        element: <AboutProduct />,
      },
      {
        path: ":sama",
        element: <Product />,
      },
    ],
  },
]);
export default routes;
