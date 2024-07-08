import React from 'react'
import { BsPaperclip } from "react-icons/bs";
import { RiFlagFill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";
import person from '../../public/Avatar.png';

const Todos = ({value,add}) => {
  return (
    <div className={value ? 'flex' : 'hidden'}>
       <div className='h-auto w-[100%] bg-[#FFFFFF] rounded-[3px]'>
        <div className='pt-[12px] pl-[12px] pb-[12px] flex flex-col gap-[12px]' >
         {/* <h1 className='text-[18px] font-semibold text-[#1D2D35]'>Heading</h1> */}
         <input type="text" placeholder='Title'/>
         {/* <p className='font-normal text-[#1D2D35]'>description</p> */}
         <input type="text" placeholder='Description' />
         <div>
         {/* <button className='h-[30px] max-w-none flex items-center p-[15px] bg-[#2c2cea88] font-semibold text-white rounded-[4px]'>Name</button> */}
         <button onClick={add} className='h-[30px] max-w-none flex items-center p-[15px] bg-[#2c2cea88] font-semibold text-white rounded-[4px]' >Add Task</button>
         </div>
        </div>
         <div className='w-full h-[46px] flex border-t border-[#C4C4C4] items-center justify-between pl-[15px] pr-[15px]'>
          <div className='flex gap-[25px] '>
          <div>
           <BsPaperclip className='w-[22px] h-[22px]'/>
          </div>
          <div>
           <RiFlagFill  className='w-[22px] h-[22px]'/>
          </div>
          <div>
           <GoClockFill className='w-[22px] h-[22px]'/>
          </div>
          </div>
          <div className='h-[30px] w-[30px]'>
              <img src={person} alt=""  />
          </div>
         </div>
       </div>
    </div>
  )
}

export default Todos