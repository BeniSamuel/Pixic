import React from "react";
import DashboardMain from "../../../Layout/DashboardMain";
import DashboardCenter from "../../../Layout/DashboardCenter";
import DashboardRight from "../../../Layout/DashboardRight";

const Home: React.FC = () => {
  return (
    <div>
      <DashboardMain>
        <DashboardCenter />
        <DashboardRight />
      </DashboardMain>
    </div>
  );
};

export default Home;
