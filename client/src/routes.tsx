import { createBrowserRouter } from "react-router-dom";
import HomePage from "./componants/login/HomePage";
import ResetPassword from "./componants/login/ResetPassWord";
import Cart from "./componants/Cart/Cart";
import DashBoard from "./componants/panel/overview/Dashboard";
import Statistics from "./componants/panel/overview/Statistic";
import Products from "./componants/panel/products/Products";
import Users from "./componants/panel/users/users";
import CreateUser from "./componants/panel/users/CreateUser";
import CreateProduct from "./componants/panel/products/Create_products";
import UserProfile from "./componants/panel/users/UserProfile";
import UpdateProduct from "./componants/panel/products/Update_products";
import AllUsers from "./componants/panel/users/allUsers";
import UpdateUser from "./componants/panel/users/UpdateUser";
import User from "./componants/user/User";
import Catalogue from "./componants/user/Catalogue";
import MyProfile from "./componants/user/MyProfile";
import MyOrders from "./componants/user/MyOrders";
import Order from "./componants/user/Order";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "admin",
    element: <DashBoard />,
    children: [
      {
        path: "",
        element: <Statistics />,
      },
      {
        path: "Statistic",
        element: <Statistics />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "CreateProducts",
        element: <CreateProduct />,
      },
      {
        path: "update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "users",
        element: <Users />,
        children: [
          {
            path: "",
            element: <AllUsers />,
          },
          {
            path: "add_user",
            element: <CreateUser />,
          },
          {
            path: "updateUser/:id",
            element: <UpdateUser />,
          },
          {
            path: ":id",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "user",
    element: <User />,
    children: [
      {
        path: "",
        element: <MyOrders />,
      },
      {
        path: "Products",
        element: <Catalogue />,
      },
      {
        path: "Order/:id",
        element: <Order />,
      },
      {
        path: "MyProfile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
]);

export default routes;
