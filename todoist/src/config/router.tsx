import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../Todo";
import State from "../pages/State";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todo />,
      },
      {
        path: "/state",
        element: <State />,
      },
    ],
  },
]);
export default router;
