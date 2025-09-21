import { Link } from "react-router-dom";
import { useGetAllOrderOfUser } from "../../API/OrderApi";
import type { orderType } from "../../types/orderType";
import { UserData } from "../../Store/userStore";

const MyOrders = () => {
  const { user } = UserData();
  const { data: myOrders } = useGetAllOrderOfUser(user?._id as string);

  return (
    <div>
      <h1 className="font-bold mb-4">MyOrder</h1>

      <div className="bg-white p-2">
        <div className="border-b border-b-gray-200 p-2 text-sm grid grid-cols-12">
          <h4 className="col-span-2 font-semibold text-center ">ID</h4>
          <h4 className="col-span-2 font-semibold ">Order By</h4>
          <h4 className="col-span-1 font-semibold">Quantity</h4>
          <h4 className="col-span-3 font-semibold">Date</h4>
          <h4 className="col-span-2 font-semibold">Status</h4>
          <h4 className="col-span-1 font-semibold">Action</h4>
        </div>
        <div className="p-2 ">
          {myOrders?.length == 0 ? (
            <p>No order</p>
          ) : (
            myOrders?.userOrders.map((order: orderType) => (
              <div
                key={order?._id}
                className="grid grid-cols-12 justify-center items-center text-xs gap-2 border-b border-b-gray-200 p-4 "
              >
                <div className="col-span-2   flex items-center justify-center">
                  <h5>{order._id}</h5>
                </div>
                <h4 className="w-full   col-span-2 text-start">
                  {order.orderBy.firstName} {order.orderBy.lastName}
                </h4>
                <h4 className=" w-full col-span-1">{order.products.length}</h4>
                <h4 className=" w-full col-span-3">
                  {order.createdAt.slice(0, 10)}
                </h4>
                <h4
                  className={`${
                    order.orderStatus == "Admin"
                      ? "col-span-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit "
                      : order.orderStatus == "Manager"
                      ? "col-span-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit"
                      : "col-span-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit"
                  }`}
                >
                  {order.orderStatus}
                </h4>
                <div className="col-span-1 flex text-sm gap-2">
                  <Link
                    to={`/user/Order/${order._id}`}
                    className=" cursor-pointer  bg-blue-600 rounded  text-xs  px-3 text-white pb-[3px]"
                  >
                    Edite
                  </Link>
                  <button className=" cursor-pointer bg-red-600 rounded  text-xs  px-3 text-white pb-[3px]">
                    Remove
                  </button>
                  <button className=" cursor-pointer bg-green-600 rounded  text-xs  px-3 text-white pb-[3px]">
                    Confirm
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
