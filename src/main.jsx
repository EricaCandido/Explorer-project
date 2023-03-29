import React from "react";
import App from "./pages/App";
import About from "./pages/About";
import City from "./pages/City";
import Activity from "./pages/activities/Activity";
import Id from "./pages/activities/Id";
import "./index.module.scss";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="activity" element={<Activity />} />
      <Route path="activity/:id" element={<Id />} />
      <Route path="city/:id" element={<City />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
