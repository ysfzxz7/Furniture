import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import { UserData } from "../../Store/userStore";
import { useEffect } from "react";

const User = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = UserData();

  useEffect(() => {
    !isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <UserNav />
      <div className="flex bg-gray-200">
        <div className="w-full px-15 py-4 min-h-[92vh]">
          {isAuthenticated && <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default User;
