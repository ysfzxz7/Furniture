const CreateProduct = () => {
  return (
    <div className="min-h-[100vh] p-10">
      <h1 className="font-bold text-xl mb-5">Create a new product</h1>
      <div className="flex  justify-center bg-white py-5 rounded shadow">
        <div className="w-[40%] ">
          <div className="my-5 mx-2">
            <img
              src="https://placehold.co/100x100"
              className="rounded-full mb-2"
              alt=""
            />
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
              <label htmlFor="Name">Nom de product</label>
              <input
                className="border  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Name"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="Name">Quantity</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Prenom"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="level">Min Level</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="The min level"
                type="text"
                id="level"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="Low level">Low Level</label>
              <input
                className="border border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="The Low level"
                type="text"
                id="Low level"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="Marque">Marque</label>
              <input
                className="border  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Marque"
                type="text"
                id="Marque"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="description">description</label>
              <input
                className="border  border-gray-300 text-xs p-1  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter   description"
                type="text"
                id="description"
              />
            </div>

            <div>
              <label htmlFor="status">select status</label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option selected>status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out Of Stock">Out Of Stock</option>
                <option value="Low Stock">Low Stock </option>
              </select>
            </div>
            <div>
              <label htmlFor="Role">Select a role</label>
              <select
                id="Role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
              >
                <option selected>Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories </option>
                <option value="Storage">Storage </option>
                <option value="Audio">Audio </option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-2 rounded pb-[2px] text-sm cursor-pointer "
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
