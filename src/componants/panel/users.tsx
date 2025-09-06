import { NavLink, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="min-h-[100vh] px-15">
      <div className="flex justify-between  py-3 items-center">
        <div className="bg-white  border border-gray-300 flex gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-3 border-b-2 border-b-blue-600" : " p-3"
            }
            to={"admins"}
          >
            Admins
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-3 border-b-2 border-b-blue-600" : " p-3"
            }
            to={"managers"}
          >
            Managers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-3 border-b-2 border-b-blue-600" : " p-3"
            }
            to={"Employer"}
          >
            Employer
          </NavLink>
        </div>
        <div>
          <span className="text-sm">
            Total Member : <span className="font-bold">45</span>
          </span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Users;
