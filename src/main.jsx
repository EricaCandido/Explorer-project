import React from "react";
import App from "./pages/App";
import About from "./pages/About";
import City from "./pages/City";
import Activity from "./pages/Activity";
import "./index.module.scss";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="activity/:id" element={<Activity />} />
      <Route path="city/:id" element={<City />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
