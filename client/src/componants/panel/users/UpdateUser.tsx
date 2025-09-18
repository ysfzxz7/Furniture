import { useForm, type SubmitHandler } from "react-hook-form";
import { LuPencilLine } from "react-icons/lu";
import type { userType, userType1 } from "../../../types/userType";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleUser, useUpdateUser } from "../../../API/userApi";
import { useEffect } from "react";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetSingleUser(id as string);
  const mutation = useUpdateUser(id as string);

  const { register, handleSubmit, reset } = useForm<userType>();

  const onSubmit: SubmitHandler<userType> = (data: userType) => {
    const formData = new FormData();
    formData.append(
      "NewUser",
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        phone: data.phone,
        role: data.role,
      })
    );
    if (data.image) {
      formData.append("image", data.image[0]);
    }

    mutation.mutate(formData);
  };

  useEffect(() => {
    if (data) {
      const user: userType1 = data.user;
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        username: user.username,
      });
    }
  }, [data, reset]);

  mutation.isSuccess && navigate(0);
  return (
    <div className="min-h-[100vh] p-10">
      <h1 className="font-bold text-xl mb-5">Create a new user</h1>
      <div className="flex  justify-center bg-white py-5 rounded shadow">
        <div className=" lg:w-[40%] w-[50%] ">
          {/** create user form */}
          <form className=" w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-5">
              <div className="relative w-fit ">
                <div className="bg-white absolute  bottom-1 right-1 w-6 h-6 flex items-center justify-center rounded-full">
                  <LuPencilLine className="" />
                </div>
                <img
                  src={data?.user.image}
                  className="rounded-full mb-2 w-20 h-20"
                  alt=""
                />
              </div>
              <div>
                <input
                  type="file"
                  className="file:bg-blue-500 file:text-white file:px-2  file:rounded hover:file:bg-blue-600"
                  {...register("image")}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <label htmlFor="Name">Nom</label>
              <input
                className="border  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Name"
                type="text"
                {...register("firstName")}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="prenom">Prenom</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Prenom"
                type="text"
                {...register("lastName")}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="username">username</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                type="text"
                {...register("username")}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Email"
                type="email"
                {...register("email")}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="number">Number</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Number"
                type="number"
                {...register("phone")}
              />
            </div>
            <div>
              <label htmlFor="Role">Select a role</label>
              <select
                defaultValue={data?.user.role}
                {...register("role")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option> -- Roles -- </option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label htmlFor="New Password">New Password</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter New Password"
                type="password"
                {...register("password")}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="RepeatPassword">Repeat Password</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Repeat Password"
                type="password"
                {...register("retypePassword")}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-2 rounded pb-[2px] text-sm cursor-pointer "
              >
                {mutation.isPending ? "Loading ..." : "Update User"}
              </button>
            </div>
          </form>
          {mutation.isSuccess && (
            <p className="text-xs text-green-600 ">User updated successfully</p>
          )}

          {mutation.isError && (
            <p className="text-xs text-red-600"> User updated Failed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
