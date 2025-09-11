import { MdDeleteForever } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { users } from "../../../data/allusers";
import { LuPencilLine } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { useState, type ChangeEvent } from "react";

const Admins = () => {
  const [usersData, setUsers] = useState(users);
  const [role, setRole] = useState("Role");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
    console.log(usersData);
    if (event.target.value == "Role") {
      setUsers(users);
      return;
    }
    const filterdUsers = users.filter(
      (user) => user.role == event.target.value
    );

    setUsers(filterdUsers);

    console.log(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="flex justify-between my-2 items-center">
          <h1 className="font-bold">List of users</h1>
          <h1 className="text-sm">
            Number of users :{" "}
            <span className="font-semibold">{usersData.length}</span>
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
                value={role}
                onChange={(e: any) => handleChange(e)}
                className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option selected>Role</option>
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
      <div className="bg-white p-2">
        <div className="border-b border-b-gray-200 p-2 text-sm grid grid-cols-12">
          <h4 className="col-span-1 text-center ">Photo</h4>
          <h4 className="col-span-3 ">Name</h4>
          <h4 className="col-span-2">Mobile</h4>
          <h4 className="col-span-3">Email</h4>
          <h4 className="col-span-2">Role</h4>
          <h4 className="col-span-1">Operation</h4>
        </div>
        <div className="p-2 ">
          {usersData.map((user) => (
            <div
              key={user.id}
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
                {user.firstName} {user.lastName}
              </h4>
              <h4 className=" w-full col-span-2">{user.phone}</h4>
              <h4 className=" w-full col-span-3">{user.email}</h4>
              <h4
                className={`${
                  user.role == "Admin"
                    ? "col-span-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit "
                    : user.role == "Manager"
                    ? "col-span-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit"
                    : "col-span-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit"
                }`}
              >
                {user.role}
              </h4>
              <div className="col-span-1 flex text-sm gap-2">
                <LuPencilLine className="cursor-pointer" />
                <MdDeleteForever className="cursor-pointer" />
                <Link to={`${user.id}`}>
                  <IoEye className="cursor-pointer" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admins;
