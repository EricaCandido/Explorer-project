import React from "react";
import App from "./pages/App";
import About from "./pages/About";
import Attractions from "./pages/attractions/Attractions";
import AttractionsId from "./pages/attractions/AttractionsId";
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
      <Route path="activities" element={<Activity />} />
      <Route path="activities/:id" element={<Id />} />
      <Route path="attractions" element={<Attractions />} />
      <Route path="attractions/:id" element={<AttractionsId />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
