import { useParams } from "react-router-dom";
import { useGetSinglOrders } from "../../API/OrderApi";
import Spinner from "../icons/spinner";
import type { RealOrderType } from "../../types/orderType";

const Order = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSinglOrders(id as string);

  console.log(data?.order.products[0].productId.name);
  return (
    <div className="p-4 min-h-[92vh]">
      <div>
        <h1 className="font-bold mb-4">MyOrder</h1>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between mb-8">
          <div className="text-sm">
            <h3>
              <span className="font-bold">Order by : </span>
              {data?.order.orderBy.firstName} {data?.order.orderBy.lastName}
            </h3>
            <h3>
              <span className="font-bold">Email : </span>
              {data?.order.orderBy.email}
            </h3>
            <h3>
              <span className="font-bold">Phone : </span>
              {data?.order.orderBy.phone}
            </h3>
          </div>
          <div className="text-sm ">
            <span className="font-bold">Created at :</span>
            <span>{data?.order.createdAt.slice(0, 10)}</span>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center space-y-2 ">
          {isError && <p>there was an Error</p>}
          {isLoading ? (
            <div className="p-15">
              <Spinner h={10} w={10} />
            </div>
          ) : (
            data?.order.products.map((product: any) => (
              <div
                className=" border border-gray-200 bg-gray-50 w-[50%] p-2 justify-between items-center grid grid-cols-7"
                key={product.productId._id}
              >
                <h1 className="text-xs col-span-1  flex items-center ">
                  {product.productId.name}
                </h1>
                <h1 className="text-xs col-span-2  flex items-center">
                  {product.productId.category}
                </h1>
                <h1 className="text-xs col-span-1  flex items-center">
                  <span>Left :</span>
                  <span className="text-xs border rounded px-2 pb-[2px] border-gray-200 bg-gray-300 font-semibold ml-2">
                    {product.productId.quantity}
                  </span>
                </h1>
                <div className="flex col-span-2  justify-end ">
                  <button className="bg-blue-600 rounded text-white px-3">
                    +1
                  </button>
                  <h3 className="border rounded font-bold border-gray-200 px-3 mx-3">
                    {product.quantity}
                  </h3>
                  <button className="bg-blue-600 rounded text-white px-3">
                    -1
                  </button>
                </div>
                <button className="col-span-1 text-xs  bg-red-500 px-4 mx-2 rounded text-white  h-full">
                  Delete
                </button>
              </div>
            ))
          )}

          <div className=" mx-auto w-[50%] flex justify-end mt-4">
            <button className="bg-green-600 rounded text-white text-xs px-2 py-1 ">
              Update Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const order: RealOrderType = {
  _id: "ORD-2025-001",
  orderBy: {
    _id: "CUS-1001",
    firstName: "Sophia Miller",
    lastName: "Sophia Miller",
    email: "sophia.miller@example.com",
    phone: "+1-202-555-0198",
  },
  products: [
    {
      productId: "PRD-001",
      name: "Wireless Mouse",
      category: "Electronics",
      quantity: 2,
    },
    {
      productId: "PRD-004",
      name: "USB-C Hub",
      category: "Accessories",
      quantity: 1,
    },
    {
      productId: "PRD-005",
      name: "External SSD 1TB",
      category: "Storage",
      quantity: 1,
    },
  ],
  orderStatus: "Completed",
  createdAt: "2025-09-05T11:30:00Z",
  updatedAt: "2025-09-08T14:10:00Z",
  notes: "Customer requested gift wrapping.",
};

export default Order;
