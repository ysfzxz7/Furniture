import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../API/productApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { updateFormType } from "../../types/productType";
import { useEffect } from "react";
import Spinner from "../icons/spinner";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id], // cache key
    queryFn: async () => await getSingleProduct(id as string), // fetcher function
  });

  const { reset, register, handleSubmit } = useForm<updateFormType>();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(
        `http://localhost:7000/api/product/updateProduct/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Field to update data");
      return await res.json();
    },
    onSuccess: () => {
      navigate("/Admin/products");
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        description: data.description,
        quantity: data.quantity,
        minLevel: data.minLevel,
        supplier: data.supplier,
        categorie: data.category,
        status: data.status,
      });
    }
  }, [data, reset]);

  const handleSub: SubmitHandler<updateFormType> = (data) => {
    const formData = new FormData();
    const fd = {
      name: data.name,
      category: data.categorie,
      quantity: data.quantity,
      minLevel: data.minLevel,
      supplier: data.supplier,
      status: data.status,
      description: data.description,
      lastUpdated: new Date(),
    };
    if (data.image) {
      formData.append("image", data.image[0]);
    }
    formData.append("newProduct", JSON.stringify(fd));

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-[100vh] p-10">
      <h1 className="font-bold text-xl mb-5">Update product</h1>

      <div className="flex  justify-center bg-white py-5 rounded shadow">
        {isError && <>Error : {error}</>}
        {isLoading ? (
          <Spinner w={10} h={10} />
        ) : (
          <form className="w-[40%] " onSubmit={handleSubmit(handleSub)}>
            <div className="my-5 mx-2">
              <img src={data?.image} className="rounded-full mb-2 w-30 h-30" />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  className="file:bg-blue-500 file:text-white file:px-2  file:rounded hover:file:bg-blue-600 "
                  {...register("image")}
                />
              </div>
            </div>
            <div className=" w-full space-y-4">
              <div className="flex justify-between">
                <label htmlFor="Name" className="text-sm">
                  Nom de product
                </label>
                <div className="flex w-[70%] flex-col ">
                  <input
                    className="border   border-gray-300  text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Enter your Name"
                    {...register("name")}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <label htmlFor="Name">Quantity</label>
                <div className=" w-[70%]">
                  <input
                    className="border w-full  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Quantity"
                    type="number"
                    {...register("quantity")}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <label htmlFor="level">Min Level</label>
                <div className="w-[70%]">
                  <input
                    className="border w-full border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="The min level"
                    type="text"
                    {...register("minLevel")}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <label htmlFor="Marque">Marque</label>
                <div className="w-[70%]">
                  <input
                    className="border  w-full border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your Marque"
                    {...register("supplier")}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <label htmlFor="description">description</label>
                <input
                  className="border  w-[70%] border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter   description"
                  type="text"
                  {...register("description")}
                />
              </div>

              <div>
                <label htmlFor="status">select status</label>
                <select
                  defaultValue={data?.status}
                  {...register("status")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-1 rounded focus:ring-blue-500 focus:border-blue-500  w-full text-xs "
                >
                  <option>Status</option>

                  {allStatus.map((state) => (
                    <option key={state} className="text-xs">
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label htmlFor="Role">Select a categorie</label>
                <select
                  {...register("categorie")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
                >
                  <option>Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories </option>
                  <option value="Storage">Storage </option>
                  <option value="Audio">Audio </option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className={`  px-2 rounded pb-[1px] items-center text-sm cursor-pointer  flex ${
                    mutation.isPending
                      ? "bg-white text-black border border-gray-200 "
                      : "bg-green-600 text-white"
                  }`}
                >
                  <h3>Update Product</h3>
                  {mutation.isPending && <Spinner w={6} h={6} />}
                </button>
                <button
                  onClick={() => navigate("/Admin/products")}
                  type="button"
                  className={`  px-2 rounded pb-[1px] items-center text-sm cursor-pointer  flex bg-red-600 text-white`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const allStatus = ["Low Stock", "In Stock", "Out Of Stock"];

export default UpdateProduct;
