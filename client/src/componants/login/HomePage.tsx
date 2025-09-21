import { useNavigate } from "react-router-dom";
import { useGetSingleUser } from "../../API/userApi";
import man from "../../assets/manui2.png";
import { UserData } from "../../Store/userStore";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const { setUser, isAuthenticated, user } = UserData();

  const { data } = useGetSingleUser("68cae2b45393fa1378f6e90d" as string);

  useEffect(() => {
    if (isAuthenticated) {
      user?.role === "Admin" ? navigate("Admin") : navigate("user");
    }
  }, [isAuthenticated, navigate, user]);

  const handleLogin = () => {
    if (data?.user) {
      setUser(data.user);
    }
  };
  return (
    <div className="h-[100vh] bg-gray-200">
      <nav className="bg-white flex  justify-between h-[15vh] px-30 items-center sticky top-0">
        <h1 className="font-bold text-2xl">Gestion De Furniture </h1>
        <img src={man} className="w-20" alt="" />
      </nav>
      <div className="flex items-center  justify-center  h-[85vh]    bg-gray-200">
        <div className="bg-white p-5 rounded shadow-2xl  lg:w-[30%]">
          <h1 className="font-bold  text-center">Login</h1>
          <div className="flex my-5 justify-around gap-4 ">
            <h1 className="text-sm  w-[25%]">Username</h1>
            <input
              className="w-[80%] rounded-md border border-gray-300 px-3  placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              name="username"
              autoComplete="username"
            />
          </div>
          <div className="flex justify-around items-center gap-4 ">
            <h1 className="text-sm  w-[25%]">Password</h1>
            <input
              className="w-[80%] rounded-md border border-gray-300 px-3  placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 "
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="cursor-pointer bg-green-600 rounded text-center text-xs text-white px-4 py-1 mt-4 flex justify-end pb-[7px]"
              onClick={handleLogin}
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center  relative">
            <h1 className="bg-white z-10 w-10 text-center">or</h1>
            <div className="border-t-2 w-full absolute border-gray-200 bottom-[35%]"></div>
          </div>
          <div>
            <h2 className="text-xs text-blue-800 underline mt-2 cursor-pointer">
              Ask for new account
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
