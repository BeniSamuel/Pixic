import React from "react";
import { Link } from "react-router-dom";

const DashboardLeft: React.FC = () => {
  return (
    <div className=" bg-[#0F0F0F] w-[20%] h-full flex flex-col rounded-2xl gap-20 py-6">
      <div className=" font-poppins text-white text-center cursor-pointer">
        PiXic
      </div>
      <div className=" flex flex-col px-8 gap-5">
        <div>
          <img src="" alt="" />
          <div className=" font-poppins text-white font-normal cursor-pointer hover:underline">
            <Link to={"/photographer/home"}>Dashboard</Link>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <div className=" font-poppins text-white font-normal cursor-pointer hover:underline">
            <Link to={"/photographer/profile"}>Profile</Link>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <div className=" font-poppins text-white font-normal cursor-pointer hover:underline">
            <Link to={"/photographer/calender"}>Calendar</Link>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <div className=" font-poppins text-white font-normal cursor-pointer hover:underline">
            <Link to={"/photographer/chat"}>Chat</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
