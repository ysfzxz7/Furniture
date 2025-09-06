import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ResetPassword from "./componants/login/ResetPassWord";
import Profile from "./componants/user/Profile";
import Cart from "./componants/Cart/Cart";
import DashBoard from "./componants/panel/Dashboard";
import Statistics from "./componants/panel/Statistic";
import Products from "./componants/panel/Products";
import Users from "./componants/panel/users";
import Historique from "./componants/panel/Historique";
import Admins from "./componants/panel/users/Admins";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "Admin",
    element: <DashBoard />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "statistic",
        element: <Statistics />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
        children: [
          {
            path: "admins",
            element: <Admins />,
          },
          {
            path: "managers",
            element: <>mangers</>,
          },
          {
            path: "employer",
            element: <>employee</>,
          },
        ],
      },
      {
        path: "Historique",
        element: <Historique />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
]);

export default routes;
