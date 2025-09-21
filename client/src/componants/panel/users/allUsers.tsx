import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useGetUsersLength } from "../../../API/userApi";
import UserBar from "./UserBar";
import { UserData } from "../../../Store/userStore";

const AllUsers = () => {
  const { data: usersLength } = useGetUsersLength();
  return (
    <div>
      <div>
        <div className="flex justify-between my-2 mt-8 items-center">
          <h1 className="font-bold">List of users</h1>
          <h1 className="text-sm">
            Number of users :
            <span className="font-semibold">{usersLength?.length}</span>
          </h1>
        </div>
        <div className="flex justify-end">
          <div className="mb-3 flex w-fit justify-end gap-3 ">
            <div className="flex relative w-fit flex-1">
              <input
                type="text"
                className="w-full py-1 px-3   border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="search"
              />
              <IoMdSearch className="absolute right-2 mt-2 " />
            </div>
            <div className="max-w-sm mx-auto  ">
              <select
                id="countries"
                className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option>Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <Link
              className="bg-green-600 text-white w-fit border  text-sm py-1 px-2 rounded"
              to={"add_user"}
            >
              Créer un utilisateur ?
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded">
        <div className="border-b border-b-gray-200 p-2 text-sm grid grid-cols-12">
          <h4 className="col-span-1 text-center ">Photo</h4>
          <h4 className="col-span-3 ">Name</h4>
          <h4 className="col-span-2">Mobile</h4>
          <h4 className="col-span-3">Email</h4>
          <h4 className="col-span-1">Role</h4>
          <h4 className="col-span-2 text-center">Operation</h4>
        </div>
        <UserBar />
      </div>
    </div>
  );
};

export default AllUsers;
