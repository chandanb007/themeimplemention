import { createRoot } from "react-dom/client";
import { Link, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/secure/Dashboard";
import AddSchool from "../pages/secure/school/Add";
import ListSchool from "../pages/secure/school/List";
import AddStudent from "../pages/secure/student/Add";
import ListStudent from "../pages/secure/student/List";
import AddSubscription from "../pages/secure/subscription/Add";
import ListSubscription from "../pages/secure/subscription/List";

import Wrapper from "../components/common/Wrapper";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "school/add",
    element: <AddSchool />,
  },
  {
    path: "school/list",
    element: <ListSchool />,
  },
  {
    path: "teacher/add",
    element: <AddSchool />,
  },
  {
    path: "teacher/list",
    element: <ListSchool />,
  },
  {
    path: "student/add",
    element: <AddStudent />,
  },
  {
    path: "student/list",
    element: <ListStudent />,
  },
  {
    path: "subscription/list",
    element: <ListSubscription />,
  },
  {
    path: "subscription/add",
    element: <AddSubscription />,
  },
]);
export default routes;
