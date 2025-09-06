import { MdDeleteForever } from "react-icons/md";
import { IoEye } from "react-icons/io5";

import { Link } from "react-router-dom";
import { users } from "../../../data/allusers";
import { LuPencilLine } from "react-icons/lu";

const Admins = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between my-2">
          <h1>admins</h1>
          <Link
            className="bg-green-600 text-white  text-sm py-1 px-2 rounded"
            to={"add_user"}
          >
            Créer un utilisateur ?
          </Link>
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
          {users.map((user) => (
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
                <IoEye className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admins;
