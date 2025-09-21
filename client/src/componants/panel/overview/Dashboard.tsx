import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Aside from "./Aside";
import { UserData } from "../../../Store/userStore";
import { useEffect } from "react";

const DashBoard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = UserData();

  useEffect(() => {
    !isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <NavBar />
      <div className="flex bg-gray-200">
        <Aside />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
