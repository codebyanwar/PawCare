import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";
import ServiceDetails from "../Pages/ServiceDetails";
import { serviceLoader } from "../Loaders/ServiceLoader";
import ServiceDetailsLoader from "../Loaders/ServiceDetailsLoader";
import LoginForm from "../Component/Form/LoginForm";
import RegisterForm from "../Component/Form/RegisterForm";
import PrivetRoute from "../Provider/PrivetRoute";
import UpdateProfile from "../Component/UpdateProfile";
import Loading from "../Component/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: serviceLoader,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "service",
        Component: Service,
        loader: serviceLoader,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "service/service-details/:id",
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
        loader: ServiceDetailsLoader,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "login",
        Component: LoginForm,
      },
      {
        path: "register",
        Component: RegisterForm,
      },
      {
        path: "update-profile",
        Component: UpdateProfile,
      },
    ],
  },
]);

export default router;
