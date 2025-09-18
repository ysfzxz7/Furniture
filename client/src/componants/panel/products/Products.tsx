import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllProducts,
  getDistinctCategories,
} from "../../../API/productApi";
import ProductBar from "../products/ProductBar";
import Spinner from "../../icons/spinner";

const Products = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"], // cache key
    queryFn: fetchAllProducts, // fetcher function
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getDistinctCategories,
  });

  return (
    <div className="min-h-[100vh] p-10">
      <div className="flex justify-between">
        <h1 className="font-bold">Products List</h1>
        <Link
          className="bg-green-600 text-white px-3 rounded text-sm pt-[2px] hover:bg-green-700 flex items-center gap-1 pb-[2px]"
          to={"/Admin/CreateProducts"}
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
                <option key={"all"}>Categories</option>
                {categories?.map((category: string) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </form>
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option>Stock Status</option>
                <option value="US">In stock</option>
                <option value="CA">Low Stock</option>
                <option value="DE">Out Of stock</option>
              </select>
            </form>
          </div>
        </div>
        <div className="bg-white p-2 rounded shadow">
          <div className="border-b border-b-gray-200 p-2 text-sm grid grid-cols-12">
            <h4 className="col-span-1 text-center text-xs font-bold">Photo</h4>
            <h4 className="text-xs font-bold col-span-3 ">Name</h4>
            <h4 className="text-xs font-bold col-span-2">Category</h4>
            <h4 className="text-xs font-bold col-span-2">Stock</h4>
            <h4 className="text-xs font-bold col-span-3">Status</h4>
            <h4 className="text-xs font-bold col-span-1">Operation</h4>
          </div>
          <div className="p-2 ">
            {isError && <>Error {error.message}</>}
            {isLoading ? (
              <div className="text-sm flex items-center justify-center font-bold text-center ">
                <Spinner h={10} w={10} />
              </div>
            ) : (
              data?.map((product: any) => (
                <ProductBar key={product._id} prod={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
