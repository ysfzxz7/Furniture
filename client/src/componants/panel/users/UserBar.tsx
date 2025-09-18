import { Link } from "react-router-dom";
import { useDeleteUser, useGetAllUsers } from "../../../API/userApi";

const UserBar = () => {
  const { data } = useGetAllUsers();
  const { mutate: deleteUser, isPending } = useDeleteUser();

  return (
    <div className="p-2 ">
      {data?.users.map((user: any) => (
        <div
          key={user._id}
          className="grid grid-cols-12 justify-center items-center text-xs gap-2 border-b border-b-gray-200 p-2 "
        >
          <div className="col-span-1   flex items-center justify-center">
            <img className="rounded-full w-12 h-12" src={user.image} alt="" />
          </div>
          <h4 className="w-full   col-span-3 text-start ">
            {user.firstName} {user.lastName}
          </h4>
          <h4 className=" w-full col-span-2">{user.phone}</h4>
          <h4 className=" w-full col-span-3">{user.email}</h4>
          <h4
            className={`${
              user.role == "Admin"
                ? "col-span-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit "
                : user.role == "Manager"
                ? "col-span-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit"
                : "col-span-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit"
            }`}
          >
            {user.role}
          </h4>
          <div className="col-span-2 flex text-sm gap-2 items-center  justify-center">
            <Link
              to={`updateUser/${user._id}`}
              className="cursor-pointer pb-[2px] text-xs rounded bg-green-500 px-2"
            >
              update
            </Link>
            <h3
              className="text-xs rounded bg-red-500 px-2 text-white cursor-pointer pb-[2px]"
              onClick={() => deleteUser(user._id)}
            >
              {isPending ? "Deleting..." : "Delete"}
            </h3>
            <Link to={`${user._id}`}>
              <h3 className="text-xs rounded bg-blue-500 px-2 cursor-pointer pb-[2px]">
                Voir
              </h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBar;
