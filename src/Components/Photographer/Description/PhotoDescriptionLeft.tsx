import React from "react";
import { useNavigate } from "react-router-dom";

const PhotoDescriptionLeft: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/photographer/description");
  }

  return (
    <div className=" bg-[#0E0E0E] h-[100vh] w-[100%] md:w-[70%] flex flex-col items-center gap-10 justify-center md:py-20 overflow-y-auto">
      <div className=" flex flex-row gap-4 items-center bg-[#121111] px-4 py-4 rounded-lg">
        <div className=" bg-[#470407] h-10 w-1 rounded-lg" />
        <p className=" text-white font-poppins ">
          Provide detailed information for nice experience
        </p>
      </div>
      <div className=" flex flex-col gap-9 items-center">
        {/* <input type="email" placeholder='Provide a Description...'  className=' outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 w-[30rem] h-60'/> */}
        <textarea
          typeof="text"
          placeholder="Provide a Description..."
          className=" outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 pt-6 w-[30rem] h-60 focus:bg-[#1B1A1A]"
        />
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

export default PhotoDescriptionLeft;
