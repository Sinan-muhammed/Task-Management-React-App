import React from 'react'
import avatar from '../../public/Avatar.png'
import avatar2 from '../../public/Avatar2.png'
import avatar3 from '../../public/Avatar3.png'
import avatar4 from '../../public/Avatar4.png' 

const TaskHead = () => {
    const avatars = [
        avatar,avatar2,avatar3,avatar4
    ]
  return (
    <div className='h-[70px] w-full bg-[#E6ECF0] flex items-center pl-[56px] pr-[56px]'>
        <div className="flex gap-[16px] justify-center items-center">
           <h1 className='text-[16px] font-bold'>Product Design Team</h1>
           <button className='h-[32px] w-[90px] bg-[#2c2cea88] text-white font-semibold rounded-[5px] hover:bg-[#2c2cea62]'>Sprint 9</button>
        </div>
        <div className="right w-[50%]">
              {avatars.map((item,index)=>(
                <img src={item} alt="" />
              ))}
        </div>
    </div>
  )
}

export default TaskHead