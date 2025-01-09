import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignupLeft:React.FC = () => {
  const navigate = useNavigate();

  function handleClick () {
    navigate("/client/location");
  }
  return (
    <div className=' bg-[#0E0E0E] h-[100vh] w-[100%] md:w-[70%] flex flex-col items-center gap-16 justify-center md:py-20'>
        <div className=' text-[#470407] font-mulish text-2xl font-extrabold'>PiXic</div>
        <div className=' flex flex-col gap-9 items-center'>
            <input type="email" placeholder='Name'  className=' outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-3 w-[30rem]'/>
            <input type="email" placeholder='Email'  className=' outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-3 w-[30rem]'/>
            <div className=' flex flex-col gap-2'>
                <input type="password" placeholder='Password' className=' outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-3 w-[30rem]'/>
                <p className=' text-right text-white font-poppins'>Forgot Password?</p>
            </div>
        </div>
        <div className=' flex flex-col items-center'>
            <button className=' text-white font-poppins bg-[#470407] py-3 rounded-lg w-[30rem]' onClick={handleClick}>Next</button>
        </div>
        <div>
            <p className=' text-white font-poppins'>Already on site. <span className=' text-[#470407] font-semibold'><Link to="/client/login">Login</Link></span></p>
        </div>

    </div>
  )
}

export default SignupLeft
