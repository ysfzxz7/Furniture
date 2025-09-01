import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default routes;
