import { Link } from "react-router-dom";
import { useGetAllOrders } from "../../../API/OrderApi";
import type { orderType } from "../../../types/orderType";
import Spinner from "../../icons/spinner";

const Orders = () => {
  const { data, isLoading, isError } = useGetAllOrders();

  const orders: orderType = data?.orders;
  console.log(orders);
  return (
    <div className="bg-white rounded pt-5 mt-5  ">
      <h1 className="font-bold text-lg mx-5 ">orders</h1>
      <div className="bg-white p-2">
        <div className="border-b border-b-gray-200 p-2 text-sm grid grid-cols-12">
          <h4 className="col-span-2 font-semibold text-center ">ID</h4>
          <h4 className="col-span-2 font-semibold text-center ">Order By</h4>
          <h4 className="col-span-1 font-semibold text-center">Quantity</h4>
          <h4 className="col-span-1 font-semibold text-center">Date</h4>
          <h4 className="col-span-3 font-semibold text-center ">Status</h4>
          <h4 className="col-span-3 font-semibold text-center ">Action</h4>
        </div>
        {isError && (
          <p className="text-xs text-red-500">
            There was an error getting order
          </p>
        )}
        {isLoading ? (
          <div className="flex p-15 justify-center items-center">
            <Spinner h={10} w={10} />
          </div>
        ) : (
          <div className="p-2 ">
            {orders?.map((order: any) => (
              <div
                key={order._id}
                className="grid grid-cols-12 justify-center items-center text-xs gap-2 border-b border-b-gray-200 p-2 "
              >
                <div className="col-span-2   flex items-center justify-center">
                  <h5>{order._id.slice(0, 8).toUpperCase()}</h5>
                </div>
                <h4 className="w-full   col-span-2 text-center">
                  {order.orderBy.firstName} <span> </span>
                  {order.orderBy.lastName}
                </h4>
                <h4 className="text-center  w-full col-span-1">
                  {order.products.length}
                </h4>
                <h4 className=" w-full  col-span-1 text-center">
                  {order.createdAt.slice(0, 10)}
                </h4>
                <div className="w-full col-span-3 flex justify-center">
                  <h4
                    className={`${
                      order.orderStatus == "Admin"
                        ? "  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit "
                        : order.orderStatus == "Manager"
                        ? "  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit"
                        : "  justify-center  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit"
                    }`}
                  >
                    {order.orderStatus}
                  </h4>
                </div>
                <div className="col-span-3 flex text-sm gap-2 justify-center ">
                  <button className=" cursor-pointer  bg-green-600 rounded  text-xs  px-3 text-white pb-[3px]">
                    Accepte
                  </button>
                  <button className=" cursor-pointer bg-red-600 rounded  text-xs  px-3 text-white pb-[3px]">
                    Cancel
                  </button>
                  <Link
                    to={`Order/${order._id}`}
                    className=" cursor-pointer bg-blue-600 rounded  text-xs  px-3 text-white pb-[3px]"
                  >
                    voir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
