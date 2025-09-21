import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { UserData } from "../../../Store/userStore";

const NavBar = () => {
  const { clearUser } = UserData();
  return (
    <div className="flex h-[8vh] px-15 justify-between bg-blue-600 py-3 text-white sticky top-0 z-50">
      <h1 className="text-xl">Dashboard</h1>
      <div className="flex gap-4 items-center justify-center ">
        <Link to={"/Admin"}>
          <FaRegUserCircle size={24} />
        </Link>
        <button onClick={clearUser}>Log Out</button>
        {/* <Link to={"/Admin/cart"}>Cart</Link> */}
      </div>
    </div>
  );
};

export default NavBar;
