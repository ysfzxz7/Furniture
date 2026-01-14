import { Link } from "react-router-dom";
import { UserData } from "../../../Store/userStore";

const NavBar = () => {
  const { clearUser, user } = UserData();
  return (
    <div className="flex h-[8vh] px-15 justify-between bg-blue-600 py-3 text-white sticky top-0 z-50">
      <h1 className="text-xl">Dashboard</h1>
      <div className="flex gap-4 items-center justify-center ">
        <Link to={"/Admin"}>
          <img
            src={user?.image as string}
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </Link>
        <button onClick={clearUser}>Log Out</button>
        {/* <Link to={"/Admin/cart"}>Cart</Link> */}
      </div>
    </div>
  );
};

export default NavBar;
