import type { ProductType } from "../../types/productType";
import type React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../API/productApi";
import { Link } from "react-router-dom";
import spinner from "../../assets/Spinner.svg";

interface ProductsProp {
  prod: ProductType;
}

const ProductBar: React.FC<ProductsProp> = ({ prod }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const handleDelete = () => {
    mutation.mutate(prod._id);
  };
  return (
    <div
      key={prod._id}
      className="grid grid-cols-12 justify-center items-center text-xs gap-2 border-b border-b-gray-200 p-2 "
    >
      <div className="col-span-1   flex items-center justify-center">
        <img
          className="rounded-full object-cover w-10 h-10"
          src={prod.image}
          alt=""
        />
      </div>
      <h4 className="w-full   col-span-3 text-start">{prod.name}</h4>
      <h4 className=" w-full col-span-2 ">{prod.category}</h4>
      <h4 className=" w-full col-span-2 ">{prod.quantity}</h4>

      <h4
        className={`${
          prod.status == "In Stock"
            ? "col-span-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit "
            : prod.status == "Low Stock"
            ? "col-span-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit"
            : "col-span-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit"
        } bg-amber-200`}
      >
        {prod.status}
      </h4>
      <div className="col-span-1  flex text-sm  gap-2 items-center justify-center">
        <Link to={`/Admin/update/${prod._id}`}>
          <h3 className="bg-blue-600 text-white text-xs rounded px-2 pb-[2px] cursor-pointer">
            Update
          </h3>
        </Link>
        <div>
          {mutation.isPending ? (
            <img src={spinner} className="w-5 h-5" alt="" />
          ) : (
            <h3
              onClick={handleDelete}
              className="bg-red-600 text-white text-xs rounded px-2 pb-[2px] cursor-pointer"
            >
              delete
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
