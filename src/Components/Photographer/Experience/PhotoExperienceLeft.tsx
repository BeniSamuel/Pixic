import React from "react";
import { useNavigate } from "react-router-dom";

const PhotoExperienceLeft: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/photographer/description");
  }

  return (
    <div className=" bg-[#0E0E0E] h-[100vh] w-[100%] md:w-[70%] flex flex-col items-center gap-10 justify-center md:py-20">
      <div className=" flex flex-row gap-4 items-center bg-[#121111] px-4 py-4 rounded-lg">
        <div className=" bg-[#470407] h-10 w-1 rounded-lg" />
        <p className=" text-white font-poppins ">
          Provide detailed information for nice experience
        </p>
      </div>
      <div className=" flex flex-col gap-9 items-center">
        <input
          type="email"
          placeholder="Location"
          className=" outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-5 w-[30rem] focus:bg-[#1B1A1A]"
        />
        <input
          type="email"
          placeholder="Experience"
          className=" outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-5 w-[30rem] focus:bg-[#1B1A1A]"
        />
        <div className=" flex flex-col gap-2">
          <input
            type="password"
            placeholder="Language"
            className=" outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-5 w-[30rem] focus:bg-[#1B1A1A]"
          />
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <button
          className=" text-white font-poppins bg-[#470407] py-5 rounded-lg w-[30rem]"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoExperienceLeft;
