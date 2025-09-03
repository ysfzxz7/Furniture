import SmallCart from "./componants/popups/SmallCart";

const HomePage = () => {
  return (
    <div className="flex items-center  justify-center h-[100vh] bg-gray-200">
      <SmallCart />
      <div className="bg-white p-5 rounded shadow-2xl">
        <h1 className="font-bold  text-center">Login</h1>
        <div className="flex my-5 justify-around gap-4">
          <h1>Username</h1>
          <input className="border border-gray-200  rounded " type="text" />
        </div>
        <div className="flex justify-around gap-4 ">
          <h1>Password</h1>
          <input className="border border-gray-200 rounded" type="password" />
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer bg-green-600 rounded text-center text-xs text-white px-4 py-1 mt-4 flex justify-end">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
