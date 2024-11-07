import React from 'react'
import PhotoSignupLeft from '../../../Components/Photographer/Signup/PhotoSignupLeft';
import PhotoSignupRight from '../../../Components/Photographer/Signup/PhotoSignupRight';

const SignupPhoto:React.FC = () => {
  return (
    <div className=' flex flex-row'>
        <PhotoSignupLeft />
        <PhotoSignupRight />
    </div>
  )
}

export default SignupPhoto;