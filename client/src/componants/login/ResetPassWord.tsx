import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-200">
      <div className="bg-white px-5 py-2  rounded shadow-2xl w-[30%]  ">
        <h1 className="text-center font-bold">Reset Password</h1>
        <div className="flex gap-3">
          <div className="flex my-5 justify-around gap-4 flex-col w-[50%]">
            <h1 className="text-sm">Old password</h1>
            <h1 className="text-sm">New Password</h1>
            <h1 className="text-sm">Confirm Password</h1>
          </div>
          <div className="flex my-5 justify-around gap-6 flex-col w-full">
            <input
              className="border border-gray-200  rounded text-xs p-1.5"
              placeholder="Enter old password"
              type="text"
            />
            <input
              placeholder="Enter new password"
              className="border border-gray-200  rounded text-xs p-1.5"
              type="text"
            />
            <input
              placeholder="Confirm password"
              className="border border-gray-200  rounded text-xs p-1.5"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Link
            to={"/Admin"}
            className="bg-red-600 font-bold text-white cursor-pointer text-xs px-3 py-1 rounded hover:bg-red-700"
          >
            Cancel
          </Link>
          <button className="bg-green-600 font-bold cursor-pointer text-white text-xs px-3 py-1 rounded hover:bg-green-700">
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
