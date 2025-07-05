import React, { ReactNode } from "react";
import DashboardLeft from "./DashboardLeft";
import Navbar from "../Components/Common/Navbar";

type DashboardMainProp = {
  children: ReactNode;
};

const DashboardMain: React.FC<DashboardMainProp> = ({ children }) => {
  return (
    <div className=" flex flex-row bg-[#0A0909] h-screen w-screen py-3 px-2 gap-3">
      <DashboardLeft />
      <div className=" flex flex-col w-[80%] h-full gap-4">
        <Navbar />
        <div className=" flex flex-row gap-3 w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
