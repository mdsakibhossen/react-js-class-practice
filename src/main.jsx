import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.jsx";
import CartProvider from "./contexts/Cart.jsx";
import ProductProvider from "./contexts/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>
);
