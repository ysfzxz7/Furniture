import { orders } from "../../../data/order";

const Orders = () => {
  return (
    <div className="bg-white rounded pt-5 mt-5  ">
      <h1 className="font-bold text-lg mx-5 ">orders</h1>
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
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-12 justify-center items-center text-xs gap-2 border-b border-b-gray-200 p-2 "
            >
              <div className="col-span-2   flex items-center justify-center">
                <h5>{order.id}</h5>
              </div>
              <h4 className="w-full   col-span-2 text-start">
                {order.orderBy.name}
              </h4>
              <h4 className=" w-full col-span-1">{order.products.length}</h4>
              <h4 className=" w-full col-span-3">{order.createdAt}</h4>
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
                <button className=" cursor-pointer  bg-green-600 rounded  text-xs  px-3 text-white pb-[3px]">
                  Accepte
                </button>
                <button className=" cursor-pointer bg-red-600 rounded  text-xs  px-3 text-white pb-[3px]">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
