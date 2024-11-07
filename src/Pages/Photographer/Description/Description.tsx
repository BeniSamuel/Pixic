import React from 'react'
import PhotoDescriptionLeft from "../../../Components/Photographer/Description/PhotoDescriptionLeft";
import PhotoExperienceRight from "../../../Components/Photographer/Experience/PhotoExperienceRight.tsx";

const Description:React.FC = () => {
  return (
    <div className=' flex flex-row'>
        <PhotoDescriptionLeft />
        <PhotoExperienceRight />
    </div>
  )
}

export default Description