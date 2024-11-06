import React from 'react'
import RegLeft from '../../Components/Registration/RegLeft'
import RegRight from '../../Components/Registration/RegRight'
import RegCenter from '../../Components/Registration/RegCenter'

const Registration:React.FC = () => {
  return (
    <div className=' flex flex-row relative'>
      <RegLeft/>
      <RegCenter/>
      <RegRight/>
    </div>
  )
}

export default Registration