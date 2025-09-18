import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="w-[10%] bg-white flex flex-col items-center ">
      <h1 className="font-bold">Menu </h1>
      <div className="font-semibold text-sm mt-10 space-y-2 flex flex-col">
        <NavLink
          to={"statistic"}
          className={({ isActive }) => (isActive ? "underline" : "bg-gray")}
        >
          Overview
        </NavLink>
        <NavLink
          to={"products"}
          className={({ isActive }) => (isActive ? "underline" : "bg-gray")}
        >
          Products
        </NavLink>
        <NavLink
          to={"users"}
          className={({ isActive }) => (isActive ? "underline" : "bg-gray")}
        >
          Users
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
