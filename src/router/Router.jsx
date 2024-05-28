import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
