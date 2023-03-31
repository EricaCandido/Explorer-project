import "./index.module.scss";

import React from "react";
import App from "./pages/App";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Attractions from "./pages/attractions/Attractions";
import AttractionsId from "./pages/attractions/AttractionsId";
import Activity from "./pages/activities/Activity";
import Id from "./pages/activities/Id";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Accomodations from "./pages/accomodations/Accomodations";
import AccomodationsId from "./pages/accomodations/AccomodationsId";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="accomodations" element={<Accomodations />} />
      <Route path="accomodations/:id" element={<AccomodationsId />} />
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
