import type React from "react";

interface productCardType {
  product: any;
}
const ProductCard: React.FC<productCardType> = ({ product }) => {
  return (
    <div className="p-2 w-full " key={product.id}>
      <img src={product.image} alt="" className="rounded w-20 h-20 mb-5 " />
      <div className="mt-2">
        <h3 className="text-xs">
          Name : <span className="font-bold">{product.name}</span>
        </h3>
        <h3 className="text-xs">
          Left in stock : <span className="font-bold">{product.quantity}</span>
        </h3>
        <h3 className="text-xs pt-2">
          Availablity :
          <span className="inline-flex items-center rounded-md bg-blue-400/10 px-1 pb-[2px] ml-2  text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
            {product.status}
          </span>
        </h3>
      </div>
      <div className="w-full flex justify-end">
        <button
          disabled={product.status == "Out Of Stock"}
          className={`text-xs rounded  px-2 pb-[2px]  cursor-pointer mt-4 ${
            product.status == "Out of Stock"
              ? "bg-gray-300 text-gray-600 border border-gray-200"
              : "bg-blue-600 text-white"
          }`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
