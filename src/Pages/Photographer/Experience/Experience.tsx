import React from "react";
import PhotoExperienceLeft from "../../../Components/Photographer/Experience/PhotoExperienceLeft.tsx";
import PhotoExperienceRight from "../../../Components/Photographer/Experience/PhotoExperienceRight.tsx";

const Experience: React.FC = () => {
  return (
    <div className=" flex flex-row">
      <PhotoExperienceLeft />
      <PhotoExperienceRight />
    </div>
  );
};

export default Experience;
