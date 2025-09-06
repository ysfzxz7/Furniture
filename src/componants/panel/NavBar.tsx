import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex px-15 justify-between bg-blue-600 py-3 text-white sticky top-0">
      <h1 className="text-xl">DashBorad</h1>
      <div className="flex gap-4">
        <Link to={"/Admin"}>Profile</Link>
        <Link to={"/Admin/cart"}>Cart</Link>
      </div>
    </div>
  );
};

export default NavBar;
