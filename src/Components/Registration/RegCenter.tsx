import React from 'react'
import { Link } from 'react-router-dom'

const RegCenter:React.FC = () => {
  return (
    <div className=' absolute left-[30%] top-[20%] bg-[#171717] h-80 w-[30rem] rounded-xl flex flex-col items-center gap-12 py-8'>
        <div className=' text-white font-mulish font-bold text-lg'> Sign up as </div>
        <div className=' flex flex-col gap-3 '>
            <button className=' bg-[#616161] text-white  py-3 rounded-[6px] font-poppins'>Client</button>
            <div className=' flex flex-row items-center gap-10'>
                <div className=' bg-white h-[0.01rem] w-32'/>
                <div className=' text-white font-mulish font-bold'>Or</div>
                <div className=' bg-white h-[0.01rem] w-32'/>
            </div>
            <button className=' bg-[#616161] text-white px-32 py-3 rounded-[6px] font-poppins'> <Link to="/photographer/login"> Photographer</Link></button>
        </div>
    </div>
  )
}

export default RegCenter