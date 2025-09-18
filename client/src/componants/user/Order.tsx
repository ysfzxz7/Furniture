import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1 className="font-bold mb-4">MyOrder</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between mb-8">
          <div className="text-sm">
            <h3>
              <span className="font-bold">Order by : </span>
              {order.orderBy.name}
            </h3>
            <h3>
              <span className="font-bold">Email : </span>
              {order.orderBy.email}
            </h3>
            <h3>
              <span className="font-bold">Phone : </span>
              {order.orderBy.phone}
            </h3>
          </div>
          <div className="text-sm ">
            <span className="font-bold">Created at :</span>{" "}
            <span>{order.createdAt.slice(0, 10)}</span>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center space-y-2 ">
          {order.products.map((product) => (
            <div className=" border border-gray-200 bg-gray-50 w-[50%] p-2 justify-between items-center grid grid-cols-7">
              <h1 className="text-xs col-span-2  flex items-center ">
                {product.name}
              </h1>
              <h1 className="text-xs col-span-2  flex items-center">
                {product.category}
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
          ))}
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

type ordertype = {
  id: string;
  orderBy: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  products: {
    productId: string;
    name: string;
    category: string;
    quantity: number;
  }[];
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
  notes: string;
};

const order: ordertype = {
  id: "ORD-2025-001",
  orderBy: {
    id: "CUS-1001",
    name: "Sophia Miller",
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
