import React from 'react'
import LoginLeft from '../../../Components/Client/Login/LoginLeft'
import LoginRight from '../../../Components/Client/Login/LoginRight'

const Login:React.FC = () => {
  return (
    <div className=' flex flex-row'>
        <LoginLeft/>
        <LoginRight/>
    </div>
  )
}

export default Login