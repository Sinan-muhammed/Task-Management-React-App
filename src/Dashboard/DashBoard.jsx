import React, { useState } from 'react'
import Menu from './DashMenu'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import DashNav from './DashMain';
import DashBody from './DashBody';


const DashBoard = () => {
  const [hide,setHide] = useState(false)
  return (
    <div className='h-[100%]  flex bg-[#2c2cea88]'>
        <div className={`relative hidden lg:flex  bg-white ${hide === true ? 'w-[5%] ' :'w-[15%]'}`}>
          <div onClick={()=>setHide((prev)=>!prev)} className={`h-[30px]  w-[30px] absolute bg-white border drop-shadow-2xl text-black rounded-full hidden md:flex justify-center items-center text-[22px] right-[-14px] top-[45px] ${hide === true ? 'rotate-180' :'rotate-0'}`}>
            <MdOutlineKeyboardArrowLeft  />
          </div>
          <Menu value={hide}/>
        </div>
        <div className={`h-[100%] pb-[30px] ${hide === true ? 'w-[95%]':'lg:w-[85%] w-[100%]'}`}>
          <DashNav/>
          <DashBody/>
        </div>
    </div>
  )
}

export default DashBoard