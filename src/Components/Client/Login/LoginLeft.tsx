import React from 'react'
import loginImage from '../../../assets/Photographer/Login/Login.png'

const LoginLeft:React.FC = () => {
  return (
    <div className=' w-[30%] bg-black'>
        <img src={loginImage} className=' h-[100vh] w-[100%]'/>
    </div>
  )
}

export default LoginLeft