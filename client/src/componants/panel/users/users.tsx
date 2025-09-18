import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="min-h-[100vh] px-15">
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Users;
