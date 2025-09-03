import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ResetPassword from "./componants/login/ResetPassWord";
import Profile from "./componants/user/Profile";
import Cart from "./componants/Cart/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default routes;
