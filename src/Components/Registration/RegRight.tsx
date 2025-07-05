import React from "react";
import bgImage from "../../assets/Registration/bgImage1.png";

const RegRight: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-1/2 bg-black">
      <img src={bgImage} className=" w-[49vw] h-[98vh]" />
    </div>
  );
};

export default RegRight;
