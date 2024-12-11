import {
 createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
 {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <h3>Route Not Found</h3>, 
   children: [
    {
     path: '/',
     element: <Home></Home>
    },
    {
     path: "/register",
     element: <Register></Register>
    },
    {
      path: "/signin",
      element: <SignIn></SignIn>
    }
   ]
 },
]);

export default router;
