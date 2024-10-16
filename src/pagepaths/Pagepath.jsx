import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../pages/landingpage/Landingpage";
import Errorpage from "../pages/errorpage/Errorpage";

const routedata = createBrowserRouter([
  {
    path: "*",
    element: <Errorpage />,
  },
  {
    path: "/",
     element: <Landingpage />,
  },
 
]);

export default routedata;
