import React from "react";
import notFound from "../../assets/Common/not-found.svg";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="bg-[#0E0E0E] h-[100vh] w-full items-center justify-center flex flex-col gap-5">
      <div className=" font-poppins text-white">Page not found</div>
      <div>
        <img src={notFound} className=" h-80 w-80" />
      </div>
      <div className=" font-poppins text-white">
        return to{" "}
        <span className="font-bold cursor-pointer font-poppins">
          <Link to={"/photographer/home"}>Home</Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
