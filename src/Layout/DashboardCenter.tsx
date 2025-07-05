import React from "react";
import DashProfile from "../Components/Common/DashProfile";
import ProgressTracker from "../Components/Common/ProgressTracker";
import RequestAvailable from "../Components/Common/RequestAvailable";

const DashboardCenter: React.FC = () => {
  return (
    <div className=" flex flex-col gap-5 w-[60%]">
      <DashProfile />
      <div className=" font-poppins text-white">Track your progress</div>
      <ProgressTracker />
      <RequestAvailable />
    </div>
  );
};

export default DashboardCenter;
