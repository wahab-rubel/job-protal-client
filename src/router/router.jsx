import {
  createBrowserRouter,
 } from "react-router-dom";
 import MainLayout from "../Layout/MainLayout";
 import Home from "../pages/Home/Home";
 import Register from "../pages/Register/Register";
 import SignIn from "../pages/SignIn/SignIn";
 import JobDetails from "../JobDetails/JobDetails";
 import PrivateRoute from "./PrivateRoute";
 import JobApply from "../JobDetails/jobApply";
 import MyApplications from "../MyApplications/MyApplications";
 import AddJob from "../pages/AddJob/AddJob";
 import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
 import ViewApplications from "../pages/ViewApplications/ViewApplications";
 
 
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
       path: "/signIn",
       element: <SignIn></SignIn>
     },
     {
       path: '/addJob',
       element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
     },
     {
       path: '/jobs/:id',
       element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
       loader: ({params}) => fetch(`http://localhost:8000/jobs/${params.id}`)
     },
     {
       path: '/jobApply/:id',
       element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
       loader: ({params}) => fetch(`http://localhost:8000/jobs/${params.id}`)
     },
     {
       path: '/myApplications',
       element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
     },
     {
       path: '/myPostedJobs',
       element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
     },
     {
       path: '/viewApplications/:job_id',
       element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
       loader: ({ params }) => fetch(`http://localhost:8000/job-applications/${params.job_id}`)
     },
    ]
  },
 ]);
 
 export default router;
 