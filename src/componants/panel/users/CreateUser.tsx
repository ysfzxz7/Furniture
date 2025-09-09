import { LuPencilLine } from "react-icons/lu";

const CreateUser = () => {
  return (
    <div className="min-h-[100vh] p-10">
      <h1 className="font-bold text-xl mb-5">Create a new user</h1>
      <div className="flex  justify-center bg-white py-5 rounded shadow">
        <div className="w-[40%] ">
          <div className="my-5">
            <div className="relative w-fit ">
              <div className="bg-white absolute  bottom-1 right-1 w-6 h-6 flex items-center justify-center rounded-full">
                <LuPencilLine className="" />
              </div>
              <img
                src="https://placehold.co/100x100"
                className="rounded-full mb-2"
                alt=""
              />
            </div>
            <div>
              <input
                type="file"
                name=""
                className="file:bg-blue-500 file:text-white file:px-2  file:rounded hover:file:bg-blue-600"
                id=""
              />
            </div>
          </div>
          <form action="" className=" w-full space-y-4">
            <div className="flex justify-between">
              <label htmlFor="Name">Nom</label>
              <input
                className="border  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Name"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="Name">Prenom</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Prenom"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="username">username</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                type="text"
                id="username"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="Name">Email</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Email"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="Name">Number</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Number"
                type="text"
                id="Name"
              />
            </div>
            <div>
              <label htmlFor="Role">Select a role</label>
              <select
                id="Role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option selected>Categories</option>
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
                id="NewPassword"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="RepeatPassword">Repeat Password</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Repeat Password"
                type="password"
                id="RepeatPassword"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-2 rounded pb-[2px] text-sm cursor-pointer "
              >
                Create user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
