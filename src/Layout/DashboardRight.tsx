import React from "react";
import Calendar from "../Components/Common/Calendar";
import History from "../Components/Common/History";

const DashboardRight: React.FC = () => {
  return (
    <div className=" flex flex-col w-[40%] gap-2">
      <Calendar />
      <History />
    </div>
  );
};

export default DashboardRight;
