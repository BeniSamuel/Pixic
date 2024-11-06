import React from 'react'
import SignupLeft from '../../../Components/Client/Signup/SignupLeft'
import SignupRight from '../../../Components/Client/Signup/SignupRight'

const Signup:React.FC = () => {
  return (
    <div className=' flex flex-row'>
        <SignupLeft/>
        <SignupRight/>
    </div>
  )
}

export default Signup