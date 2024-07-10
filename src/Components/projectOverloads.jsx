import React from 'react'

const   ProjectOverloads = () => {
    const name =[
        'Sam','Meldy','Ken','Dmitry','Vego','Kadin','Melm'
    ]
  return (
    <div className=''>
       <div className='flex items-end p-[14px] justify-between'>
        <div>
        <div className='h-[30px] w-[30px] border-black border flex items-center justify-center text-white bg-black text-[13px] rounded-full'>07</div>
        <div className='h-[30px] w-[30px] border-black border rounded-full'></div>
        <div className='h-[30px] w-[30px] border-black border rounded-full'></div>
   
        </div>
        <div>
        <div className='h-[30px] w-[30px] border border-black flex items-center justify-center text-white bg-black text-[13px] rounded-full'>08</div>
        <div className='h-[30px] w-[30px] border border-black rounded-full'></div>
        <div className='h-[30px] w-[30px] border border-black rounded-full'></div>
        <div className='h-[30px] w-[30px] border border-black rounded-full'></div>
        </div>
        <div>
        <div className='h-[30px] w-[30px] border border-black flex items-center justify-center text-white bg-black text-[13px] rounded-full'>02</div>
        </div>
        <div>
        <div className='h-[30px] w-[30px]  flex items-center justify-center text-white bg-[#2B5CE6] text-[13px] rounded-full'>08</div>
        <div className='h-[30px] w-[30px] border border-black  rounded-full'></div>
        <div className='h-[30px] w-[30px] border border-black  rounded-full'></div>
        <div className='h-[30px] w-[30px] border border-black  rounded-full'></div>
        <div className='h-[30px] w-[30px] border border-black  rounded-full'></div>
        <div className='h-[30px] w-[30px] border border-black  rounded-full'></div>
        </div>
        <div>
        <div className='h-[30px] w-[30px] border  border-black flex items-center justify-center text-white bg-black text-[13px] rounded-full'>08</div>
        <div className='h-[30px] w-[30px] border  border-black rounded-full'></div>
        <div className='h-[30px] w-[30px] border  border-black rounded-full'></div>
        <div className='h-[30px] w-[30px] border  border-black rounded-full'></div>
        </div>
        <div>
        <div className='h-[30px] w-[30px] border border-black flex items-center justify-center text-white bg-black text-[13px] rounded-full'>02</div>
        </div>
        <div>
        <div className='h-[30px] w-[30px] border border-black flex items-center justify-center text-white bg-black text-[13px] rounded-full'>04</div>
        <div className='h-[30px] w-[30px] border border-black rounded-full'></div>
        </div>
        </div> 
        <div className='w-[100%] flex justify-between pl-[10px] pr-[0px] text-[#797979] font-semibold'>
             {name.map((item)=>(
                <h1>{item}</h1>
             ))}
        </div>
    </div>
  )
}

export default ProjectOverloads