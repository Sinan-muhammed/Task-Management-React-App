import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



const Menu = (Top) => {
    const [open,setOpen] = useState(false)
   

  return (
    <>
    <div>
        <div className='z-[999]'>
        <IoMenu onClick={()=>setOpen(true)} className='text-white h-[40px] w-[40px] ' />
        </div>
        <div className={`h-full z-[40] top-0 w-[200px] bg-white absolute right-0 text-white  justify-center items-center flex-col font-semibold gap-[20px] ${open ? 'flex' : 'hidden'}`}>
           < RxCross2 onClick={()=>setOpen(false)} className='text-black  text-[25px] absolute top-[20px] right-[20px]' />
         
           <button className='h-[25px] w-[100px] flex items-center justify-center  bg-violet-800'>Backlog</button>
           <button className='h-[25px] w-[100px] flex items-center justify-center  bg-violet-800'>Board</button>
           <button className='h-[25px] w-[100px] flex items-center justify-center  bg-violet-800'>Feed</button>
           <button className='h-[25px] w-[100px] flex items-center justify-center  bg-violet-800'>Report</button>
        </div>
        <div onClick={()=>setOpen(false)} className={`h-full absolute w-[200px] left-0 top-0 bg-[#2b2edf23] ${open ? 'flex' :' hidden'}`}></div>
    </div>
    </>
  )
}

export default Menu