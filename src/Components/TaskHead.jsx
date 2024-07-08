import React from 'react'
import avatar from '../../public/Avatar.png'
import avatar2 from '../../public/Avatar2.png'
import avatar3 from '../../public/Avatar3.png'
import avatar4 from '../../public/Avatar4.png' 
import avatar5 from '../../public/Avatar__Count.png'


const TaskHead = () => {
    const avatars = [
        avatar,avatar2,avatar3,avatar4
    ]
  return (
    <div className='h-[70px] w-full bg-[#E6ECF0] flex items-center md:pl-[56px] pl-[12px] md:pr-[56px] pr-[12px] justify-between'>
        <div className="flex gap-[16px] justify-center items-center">
           <h1 className='md:text-[18px] text-[10px] font-bold'>Product Design Team</h1>
           <button className='md:h-[32px] h-[26px] w-[65px] md:w-[90px] text-[10px] md:text-[16px] bg-[#2c2cea88] text-white font-semibold rounded-[5px] hover:bg-[#2c2cea62]'>Sprint 9</button>
        </div>
        <div className="right md:pr-[12px] md:gap-0 gap-[5px] flex md:justify-center items-center">
        <div class="flex -space-x-4">
  <img class="inline-block z-[14] md:size-[46px] size-[36px] rounded-full ring-2 ring-white " src={avatar} alt='name'/>
  <img class="inline-block z-[13] md:size-[46px] size-[36px] rounded-full ring-2 ring-white " src={avatar2} alt='name'/>
  <img class="hidden md:inline-block z-[12] md:size-[46px] size-[36px] rounded-full ring-2 ring-white " src={avatar3} alt='name'/>
  <img class="hidden md:inline-block z-[11] md:size-[46px] size-[36px] rounded-full ring-2 ring-white " src={avatar4} alt='name'/>
  <img class="inline-block z-10   md:size-[46px] size-[36px] rounded-full  " src={avatar5} alt='name'/>
</div>
<hr className='rotate-90 w-[50px] bg-black hidden md:flex' />
<button className='text-[#2c2ceae1] md:flex hidden  text-[12px] font-semibold hover:text-[#2c2cea60]'>
+  New Member
</button>
   <button className='flex md:hidden text-[25px] items-center justify-center text-[#2c2ceae1]'>+</button>
        </div>
    </div>
  )
}

export default TaskHead