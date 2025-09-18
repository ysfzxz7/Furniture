import { LuPencilLine } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useGetSingleUser } from "../../../API/userApi";
import Spinner from "../../icons/spinner";

const UserProfile = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleUser(id as string);

  return (
    <div className="  h-[92vh]  flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded w-fit  px-3 py-5 shadow-2xl ">
        {isLoading ? (
          <div className="flex items-center justify-center flex-col p-16">
            <h3 className="font-bold text-sm">Loading</h3>
            <Spinner w={10} h={10} />
          </div>
        ) : (
          <div>
            <h1 className="text-lg font-bold mb-5">Profile</h1>
            <div className="flex items-center gap-5 border-b border-gray-200 mb-5 pb-2">
              <div className="relative">
                <div className="bg-white absolute bottom-1 right-1 w-6 h-6 flex items-center justify-center rounded-full">
                  <LuPencilLine className="" />
                </div>
                <img
                  src={data.user.image}
                  className="rounded-full w-20"
                  alt=""
                />
              </div>
              <div className="flex   gap-1 flex-col ">
                <h3>
                  First Name : <span>{data.user.firstName}</span>
                </h3>
                <h3>
                  Last Name : <span>{data.user.lastName}</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-end  ">
                <h3>Username : </h3>
                <h3 className=" font-semibold text-xs mb-[3px]">
                  {data.user.username}
                </h3>
              </div>
              <div className="flex gap-2 items-end  ">
                <h3>Phone : </h3>
                <h3 className=" font-semibold text-xs mb-[3px]">
                  {data.user.phone}
                </h3>
              </div>
              <div className="flex gap-2 items-end  ">
                <h3> Email: </h3>
                <h3 className=" font-semibold text-xs mb-[3px]">
                  {data.user.email}
                </h3>
              </div>

              <div className="flex  gap-2">
                <h3>Password</h3>
                <input
                  type="password"
                  name=""
                  disabled
                  className="border border-gray-200 px-2"
                  placeholder="********"
                  id=""
                />
                <Link
                  to={"http://localhost:5173/ResetPassword"}
                  className="bg-green-600 font-bold cursor-pointer text-white text-xs px-3 py-1 rounded hover:bg-green-700"
                >
                  Change Password
                </Link>
              </div>
              <div className="flex justify-end mt-5    ">
                <Link
                  to={"http://localhost:5173/"}
                  className="bg-red-600 font-bold cursor-pointer text-white text-xs px-4 py-1 rounded flex  items-center gap-2  hover:bg-blue-700"
                >
                  Delete User
                  <MdLogout className="mt-[2px]" size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
