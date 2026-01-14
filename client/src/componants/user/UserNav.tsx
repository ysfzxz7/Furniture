import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../Store/userStore";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const UserNav = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { clearUser, user } = UserData();

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  return (
    <div className="flex h-[8vh] px-15 justify-between bg-blue-600 py-3 text-white sticky top-0 z-50">
      <Link to={"/user"} className="text-xl cursor-pointer">
        Home
      </Link>
      <div className="flex gap-4 items-center justify-center relative">
        <h1 className="font-semibold">
          {user?.firstName} {user?.lastName}
        </h1>
        <Link to={"MyProfile"} className="">
          <img className="w-10 h-10 rounded-full" src={user?.image as string} />
        </Link>
        <button className=" cursor-pointer" onClick={() => setOpen(!open)}>
          <IoMdArrowDropdown size={25} />
        </button>
        <div
          className={`${
            open == true
              ? "bg-white text-sm absolute w-40 flex items-start gap-y-3  py-2 font-semibold px-2 flex-col  right-0 top-10 text-black rounded shadow z-20 "
              : "hidden bg-white text-sm absolute w-40  items-start gap-y-3  py-2 font-semibold px-2 flex-col  right-0 top-10 text-black rounded shadow z-20 "
          }`}
        >
          <Link className="hover:underline " to={"Products"}>
            Products
          </Link>
          <Link className="hover:underline " to={""}>
            My Order
          </Link>
          <Link className="hover:underline " to={""}>
            Setting
          </Link>
          <button
            onClick={handleLogout}
            className="cursor-pointer border-t w-full text-start border-gray-200 "
          >
            Log Out
          </button>
        </div>
        {/* <Link to={"/Admin/cart"}>Cart</Link> */}
      </div>
    </div>
  );
};

export default UserNav;
