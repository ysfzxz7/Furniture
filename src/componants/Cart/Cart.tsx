import { MdDelete } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
const Cart = () => {
  return (
    <div className="bg-gray-200 h-[100vh] flex items-center justify-center ">
      <div className="bg-white p-5 w-[30%] rounded shadow-2xl">
        <h1 className="font-bold text-lg text-center mb-5">cart</h1>
        <div className="h-[60vh] overflow-hidden overflow-y-scroll border-b border-gray-200 pb-2">
          {products.map((product, i) => (
            <div
              className="flex justify-between gap-5 mb-2 items-center "
              key={i}
            >
              <div className="flex w-[90px]  gap-1 items-center justify-between">
                <h2 className=" flex justify-end  w-full text-xs">
                  {i < 9 ? "0" : ""}
                  {i + 1}
                </h2>
                <img
                  src="https:placehold.co/30x30"
                  className="rounded-full"
                  alt=""
                />
              </div>
              <h2 className="text-sm font-semibold w-full ">{product.name}</h2>
              <h2 className="text-sm font-semibold flex w-[10%] justify-start">
                {product.quantity}
              </h2>
              <div className="flex mr-5 gap-2">
                <LuPencilLine />
                <MdDelete />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className=" bg-green-600 font-bold mt-3 cursor-pointer text-white text-xs px-3 py-1 rounded hover:bg-green-700">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const products = [
  { id: 1, name: "Laptop", quantity: 5 },
  { id: 2, name: "Smartphone", quantity: 10 },
  { id: 3, name: "Headphones", quantity: 15 },
  { id: 4, name: "Keyboard", quantity: 7 },
  { id: 5, name: "Monitor", quantity: 3 },
  { id: 6, name: "Mouse", quantity: 20 },
  { id: 7, name: "Printer", quantity: 4 },
  { id: 8, name: "Tablet", quantity: 8 },
  { id: 9, name: "Webcam", quantity: 12 },
  { id: 10, name: "Microphone", quantity: 6 },
  { id: 11, name: "Speaker", quantity: 14 },
  { id: 12, name: "Charger", quantity: 25 },
  { id: 13, name: "Power Bank", quantity: 18 },
  { id: 14, name: "External HDD", quantity: 9 },
  { id: 15, name: "USB Flash", quantity: 30 },
];

export default Cart;
