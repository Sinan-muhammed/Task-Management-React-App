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
    <div className='h-[70px] w-full bg-[#E6ECF0] flex items-center pl-[56px] pr-[56px] justify-between'>
        <div className="flex gap-[16px] justify-center items-center">
           <h1 className='text-[16px] font-bold'>Product Design Team</h1>
           <button className='h-[32px] w-[90px] bg-[#2c2cea88] text-white font-semibold rounded-[5px] hover:bg-[#2c2cea62]'>Sprint 9</button>
        </div>
        <div className="right pr-[12px] flex justify-center items-center">
        <div class="flex -space-x-4">
  <img class="inline-block z-50 size-[46px] rounded-full ring-2 ring-white " src={avatar} alt='name'/>
  <img class="inline-block z-40 size-[46px] rounded-full ring-2 ring-white " src={avatar2} alt='name'/>
  <img class="inline-block z-30 size-[46px] rounded-full ring-2 ring-white " src={avatar3} alt='name'/>
  <img class="inline-block z-20 size-[46px] rounded-full ring-2 ring-white " src={avatar4} alt='name'/>
  <img class="inline-block z-10 size-[46px] rounded-full ring-2 ring-white " src={avatar5} alt='name'/>
</div>
<hr className='rotate-90 w-[50px] bg-black' />
<button className='text-[#2c2ceae1] font-semibold hover:text-[#2c2cea60]'>
+  New Member
</button>
        </div>
    </div>
  )
}

export default TaskHead