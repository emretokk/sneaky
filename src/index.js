import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Page imports
import Home from "./pages/home/home";
import Urunler from "./pages/urunler/urunler";

// Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux imports
import { store } from "./app/store";
import { Provider } from "react-redux";
import Brands from "./pages/markalar/brands";
import Categories from "./pages/kategoriler/categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "urunler",
    element: <Urunler />,
  },
  {
    path: "markalar",
    element: <Brands />,
  },
  {
    path: "kategoriler",
    element: <Categories />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
