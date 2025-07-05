import React from "react";
import photoLoginImage from "../../../assets/Photographer/Login/PhotoLogin.png";

const PhotoLoginLeft: React.FC = () => {
  return (
    <div className=" w-[30%] bg-black">
      <img src={photoLoginImage} className=" h-[100vh] w-[100%]" />
    </div>
  );
};

export default PhotoLoginLeft;
