import { Outlet } from "react-router-dom";
import UserNav from "./userNav";

const User = () => {
  return (
    <div>
      <UserNav />
      <div className="flex bg-gray-200">
        <div className="w-full px-15 py-4 min-h-[92vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default User;
