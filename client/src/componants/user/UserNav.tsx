import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const UserNav = () => {
  return (
    <div className="flex h-[8vh] px-15 justify-between bg-blue-600 py-3 text-white sticky top-0 z-50">
      <Link to={"/user"} className="text-xl cursor-pointer">
        Home
      </Link>
      <div className="flex gap-4 items-center justify-center ">
        <Link to={"Products"}>Products</Link>
        <Link to={""}>My Order</Link>
        <Link to={"MyProfile"}>
          <FaRegUserCircle size={24} />
        </Link>
        {/* <Link to={"/Admin/cart"}>Cart</Link> */}
      </div>
    </div>
  );
};

export default UserNav;
