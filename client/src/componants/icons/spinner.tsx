import type React from "react";
import spinner from "../../assets/Spinner.svg";

interface spinnerProps {
  w: number;
  h: number;
}

const Spinner: React.FC<spinnerProps> = ({ w, h }) => {
  return (
    <div>
      <img src={spinner} className={`h-${h} w-${w} `} alt="" />
    </div>
  );
};

export default Spinner;
