import { createRoot } from "react-dom/client";
import { Link, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/secure/Dashboard";
import Wrapper from "../components/common/Wrapper";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Wrapper />,
  },
]);
export default routes;
