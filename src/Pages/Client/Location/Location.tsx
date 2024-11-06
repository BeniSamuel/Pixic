import React from 'react'
import LocationLeft from '../../../Components/Client/Location/LocationLeft'
import SignupRight from '../../../Components/Client/Signup/SignupRight'

const Location:React.FC = () => {
  return (
    <div className=' flex flex-row'>
        <LocationLeft/>
        <SignupRight/>
    </div>
  )
}

export default Location