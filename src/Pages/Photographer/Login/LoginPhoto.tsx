import React from "react";
import PhotoLoginLeft from "../../../Components/Photographer/Login/PhotoLoginLeft";
import PhotoLoginRight from "../../../Components/Photographer/Login/PhotoLoginRight";

const LoginPhoto: React.FC = () => {
  return (
    <div className=" flex flex-row">
      <PhotoLoginLeft />
      <PhotoLoginRight />
    </div>
  );
};

export default LoginPhoto;
