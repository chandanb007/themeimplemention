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
import AddTeacher from "../pages/secure/teacher/Add";
import ListTeacher from "../pages/secure/teacher/List";
import Profile from "../pages/secure/profile/Profile";

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
    element: <AddTeacher />,
  },
  {
    path: "teacher/list",
    element: <ListTeacher />,
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
  {
    path: "profile",
    element: <Profile />,
  },
]);
export default routes;
