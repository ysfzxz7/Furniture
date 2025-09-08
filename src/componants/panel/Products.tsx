import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { allProducts } from "../../data/allProducts";

const Products = () => {
  return (
    <div className="min-h-[100vh] p-10">
      <div className="flex justify-between">
        <h1 className="font-bold">Products List</h1>
        <Link
          className="bg-green-600 text-white px-3 rounded text-sm pt-[2px] hover:bg-green-700 flex items-center gap-1"
          to={"#"}
        >
          <IoMdAdd className="text-white" />
          Add Product
        </Link>
      </div>
      <div>
        <div className="my-5 flex justify-between">
          <div>
            <div className="flex relative w-fit">
              <input
                type="text"
                className="w-full py-1 px-3 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="search"
              />
              <IoMdSearch className="absolute right-2 mt-2 " />
            </div>
          </div>
          <div className="flex gap-3">
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option selected>Categories</option>
                <option value="US">In stock</option>
                <option value="CA">Low Stock</option>
                <option value="DE">Out Of stock</option>
              </select>
            </form>
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option selected>Stock Status</option>
                <option value="US">In stock</option>
                <option value="CA">Low Stock</option>
                <option value="DE">Out Of stock</option>
              </select>
            </form>
          </div>
        </div>
        <div className="bg-white p-2 rounded shadow">
          <div className="border-b border-b-gray-200 p-2 text-sm grid grid-cols-12">
            <h4 className="col-span-1 text-center ">Photo</h4>
            <h4 className="col-span-3 ">Name</h4>
            <h4 className="col-span-2">Category</h4>
            <h4 className="col-span-2">Stock</h4>
            <h4 className="col-span-3">Status</h4>
            <h4 className="col-span-1">Operation</h4>
          </div>
          <div className="p-2 ">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-12 justify-center items-center text-xs gap-2 border-b border-b-gray-200 p-2 "
              >
                <div className="col-span-1   flex items-center justify-center">
                  <img
                    className="rounded-full"
                    src="https://placehold.co/40x40"
                    alt=""
                  />
                </div>
                <h4 className="w-full   col-span-3 text-start">
                  {product.name}
                </h4>
                <h4 className=" w-full col-span-2 ">{product.category}</h4>
                <h4 className=" w-full col-span-2 ">{product.quantity}</h4>

                <h4
                  className={`${
                    product.status == "In Stock"
                      ? "col-span-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit "
                      : product.status == "Low Stock"
                      ? "col-span-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit"
                      : "col-span-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit"
                  } bg-amber-200`}
                >
                  {product.status}
                </h4>
                <div className="col-span-1  flex text-sm  gap-2">
                  <LuPencilLine className="cursor-pointer" />
                  <MdDeleteForever className="cursor-pointer" />
                  <IoEye className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
