import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Topbar from "../components/topbar/Topbar"
import Errorpage from "../pages/errorpage/Errorpage"


 const routedata = createBrowserRouter([{
    path:"*",
    element:<Errorpage/>
 }, {
         path: "Navbar",
         element: <Topbar />
     },])



export default routedata