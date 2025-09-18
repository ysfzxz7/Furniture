import { TfiPackage } from "react-icons/tfi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import Orders from "../orders/Orders";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsCount } from "../../../API/productApi";
import { useGetUsersLength } from "../../../API/userApi";

const Statistics = () => {
  const { data: productLength } = useQuery({
    queryFn: getProductsCount,
    queryKey: ["productsCount"],
  });

  const { data: usersLength } = useGetUsersLength();

  return (
    <div className="min-h-[100vh] p-10">
      <h1>Statistic</h1>
      <div className=" grid grid-cols-4  gap-10">
        <div className="space-y-5 text-white p-5  rounded shadow-lg hover:bg-blue-200 transition-all  duration-500 cursor-pointer  gradient">
          <div className="flex justify-between ">
            <h1 className="font-bold">Orders</h1>
            <TfiPackage />
          </div>
          <h5 className="text-sm">
            Total :<span className="font-bold"> 5 </span>
          </h5>
        </div>
        <Link
          to={"/Admin/users"}
          className="space-y-5 p-5 bg-white rounded shadow-lg hover:bg-orange-200 cursor-pointer  "
        >
          <div className="flex justify-between ">
            <h1 className="font-bold">Users</h1>
            <LuUsers />
          </div>
          <h5>
            <span className="text-sm">Total : </span>
            {usersLength?.length}
          </h5>
        </Link>
        <div className="space-y-5 p-5 rounded bg-white shadow-lg hover:bg-orange-200 cursor-pointer  ">
          <div className="flex justify-between ">
            <h1 className="font-bold">Alerts</h1>
            <FiAlertTriangle />
          </div>
          <h5>
            <span className="text-sm">Total : </span>5
          </h5>
        </div>
        <Link
          to={"/Admin/products"}
          className="space-y-5 p-5 bg-white rounded shadow-lg hover:bg-orange-200 cursor-pointer  "
        >
          <div className="flex justify-between ">
            <h1 className="font-bold">Products</h1>
            <MdOutlineProductionQuantityLimits />
          </div>
          <div>
            <span className="text-sm">Total : </span>
            <span className="font-bold">{productLength?.length}</span>
          </div>
        </Link>
      </div>
      <div>
        <Orders />
      </div>
    </div>
  );
};

export default Statistics;
