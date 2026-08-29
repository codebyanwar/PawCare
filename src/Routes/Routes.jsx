import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/service',
        Component: Service
      },
      {
        path: '/dashboard',
        Component: Dashboard
      },
      {
        path: '/contact',
        Component: Contact
      }
    ]
  },
]);


export default router;