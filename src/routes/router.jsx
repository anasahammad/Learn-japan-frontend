import { createBrowserRouter } from "react-router-dom";
import App from "../App";


import Lessons from "../pages/Users/Lessons";
import Tutorials from "../pages/Users/Tutorials";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";


export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <App/>,
    children: [
       {
        index: true,
        element: <Lessons/>
       },
       {
        path: "/tutorials",
        element: <Tutorials/>
       },
       {
        path: "/login",
        element: <Login/>
       },
       {
        path: "/register",
        element: <Register/>
       },
    ]
    }, 
   ]);