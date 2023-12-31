import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Page imports
import Home from "./pages/home/home";
import Man from "./pages/man/man";
import Woman from "./pages/woman/woman";
import Kids from "./pages/kids/kids";

// Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux imports
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "erkek",
    element: <Man />,
  },
  {
    path: "kadin",
    element: <Woman />,
  },
  {
    path: "cocuk",
    element: <Kids />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
