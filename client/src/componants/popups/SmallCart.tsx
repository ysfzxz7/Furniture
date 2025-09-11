import { useState } from "react";
import { IoClose } from "react-icons/io5";

import useNotification from "../../Store/PopUp";

const SmallCart = () => {
  const { isvisible, togglePopUp } = useNotification();

  const [qte, setQte] = useState(0);
  const handleadd = () => {
    setQte((prev) => prev + 1);
  };
  const handleLess = () => {
    if (qte <= 0) {
      return;
    }
    setQte((prev) => prev - 1);
  };

  return (
    <div
      className={`${
        isvisible == false ? "hidden" : "absolute"
      } absolute bg-white top-0 right-0 m-10 flex px-5 py-2 items-center `}
    >
      <div
        className="absolute top-1 right-1 cursor-pointer"
        onClick={togglePopUp}
      >
        <IoClose />
      </div>

      <div>
        <img className="rounded" src="https://placehold.co/60x60" alt="" />
      </div>
      <div className="ml-5 flex flex-col mr-5">
        <h2>Stylo</h2>
        <h3>
          Rest: <span>15</span>
        </h3>
        <div className="flex gap-3">
          <button className="font-bold" onClick={handleadd}>
            +
          </button>
          <span>{qte}</span>
          <button className="font-bold cursor-pointer" onClick={handleLess}>
            -
          </button>
        </div>
        <button className="bg-green-600 text-white px-4 rounded text-xs py-[1px]">
          add
        </button>
      </div>
    </div>
  );
};

export default SmallCart;
