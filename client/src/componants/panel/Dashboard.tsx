import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Aside from "./Aside";

const DashBoard = () => {
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
