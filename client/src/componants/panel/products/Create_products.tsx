import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { updateFormType } from "../../../types/productType";
import Spinner from "../../icons/spinner";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateFormType>();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`http://localhost:7000/api/product/addProduct`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) console.log("updated");
      if (!res.ok) throw new Error("Field to update data");
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/Admin/products");
    },
  });

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
    };
    if (data.image) {
      formData.append("image", data.image[0]);
    }
    formData.append("newProduct", JSON.stringify(fd));

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-[100vh] px-10 py-5">
      <h1 className="font-bold text-xl mb-5">Create a new product</h1>
      <div className="flex flex-col items-center justify-center bg-white py-5 rounded shadow">
        {mutation.isSuccess && (
          <p className="text-xs  text-green-700 w-full text-center py-2 ">
            Product Created successfully
          </p>
        )}
        <form className="w-[40%] " onSubmit={handleSubmit(handleSub)}>
          <div className="my-5 mx-2">
            <img
              src="https://placehold.co/40x40"
              className="rounded-full mb-2 w-30 h-30"
            />
            <div>
              <input
                type="file"
                accept="image/*"
                className="file:bg-blue-500 file:text-white file:px-2  file:rounded hover:file:bg-blue-600 "
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-xs text-red-500 mt-2 underline">
                  Image is required
                </p>
              )}
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
                  {...register("name", { required: true })}
                />
                {errors?.name && (
                  <p className="text-xs text-red-400">name is required</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <label htmlFor="Name">Quantity</label>
              <div className=" w-[70%]">
                <input
                  className="border w-full  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Quantity"
                  type="number"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity && (
                  <p className="text-xs text-red-500">Enter a valid Quantity</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <label htmlFor="level">Min Level</label>
              <div className="w-[70%]">
                <input
                  className="border w-full border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="The min level"
                  type="text"
                  {...register("minLevel", { required: true })}
                />
                {errors.minLevel && (
                  <p className="text-xs text-red-500">Min level is required</p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <label htmlFor="Marque">Marque</label>
              <div className="w-[70%]">
                <input
                  className="border  w-full border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your Marque"
                  {...register("supplier", { required: true })}
                />
                {errors.supplier && (
                  <p className="text-xs text-red-500">Marque is required</p>
                )}
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
            <div className="flex justify-end">
              <button
                type="submit"
                className={`  px-2 rounded pb-[1px] items-center text-sm cursor-pointer  flex ${
                  mutation.isPending
                    ? "bg-white text-black border border-gray-200 "
                    : "bg-green-600 text-white"
                }`}
              >
                <h3>Create Product</h3>
                {mutation.isPending && <Spinner w={6} h={6} />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const allStatus = ["Low Stock", "In Stock", "Out Of Stock"];

export default CreateProduct;
