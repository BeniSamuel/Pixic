import React from 'react'
import { Link } from 'react-router-dom'

const LocationLeft:React.FC = () => {
  return (
    <div className=' bg-[#0E0E0E] h-[100vh] w-[100%] md:w-[70%] flex flex-col items-center gap-16 justify-center'>
        <div className=' flex flex-row gap-4 items-center bg-[#121111] px-4 py-4 rounded-lg'>
            <div className=' bg-[#470407] h-10 w-1 rounded-lg'/>
            <p className=' text-white font-poppins '>Provide Your location for nice experience with pixic</p>
        </div>
        <div className=' flex flex-col gap-9 items-center'>
            <input type="email" placeholder='Location'  className=' outline-none bg-transparent font-poppins text-white placeholder:font-poppins bg-[#1B1A1A] border-[#505050] border-2 rounded-lg pl-7 py-3 w-[30rem]'/>
        </div>
        <div className=' flex flex-col items-center'>
            <button className=' text-white font-poppins bg-[#470407] py-3 rounded-lg w-[30rem]'>Signup</button>
        </div>

    </div>
  )
}

export default LocationLeft
