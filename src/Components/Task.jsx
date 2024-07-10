import React, { useState } from 'react'
import Tick from '../../public/tick.png'
import ProjectOverloads from './projectOverloads'

const Task = () => {
    const [active,setActive] = useState(2)
    const Tasks = [
        {icon:Tick,title:'Create a user flow of social application design',class:'bg-[#1a932e4e] text-[#1A932E]',check:'Approved'},
        {icon:Tick,title:'Create a user flow of social application design',class:'bg-[#ee201c4b] text-[#EE201C]',check:'In review'},
        {icon:Tick,title:'Landing page design for Fintech project of singapore',class:'bg-[#ee201c4b] text-[#EE201C]',check:'In review'},
        {title:'Interactive prototype for app screens of deltamine project',class:'bg-[#e6602b56] text-[#E65F2B]',check:'On going'},
        {icon:Tick,title:'Interactive prototype for app screens of deltamine project',class:'bg-[#1a932e4e] text-[#1A932E]',check:'Approved'}
    ]

 
  return (
    <div className='p-[30px] flex gap-[30px]'>
       <div className='h-[350px] w-[60%] bg-[#ffffff54] flex flex-col gap-[22px] rounded-[25px] p-[30px]'>
             <h1 className='text-[20px] font-semibold'>Today task</h1>
             <div className='flex flex-col gap-[8px] border-b-[1px] border-b-[#00000033] '>
                <div className='flex gap-[25px]  items-center font-semibold '>
                    <div onClick={()=>setActive(1)} className={` h-[100%] pb-[9px] pl-[5px] hover:cursor-pointer ${active === 1 ? 'border-b-[3px] border-b-[#2B5CE6]' :'border-none'}`}>                       
                        <h1 className='flex gap-[8px]'>All 
                            <div className='h-[25px] w-[25px] flex justify-center items-center rounded-full text-[14px] text-[#2B5CE6] bg-[#2b5de62b]'>10</div>
                        </h1>
                    </div>
                    <div onClick={()=>setActive(2)} className={` h-[100%] pb-[9px] pl-[5px] hover:cursor-pointer ${active === 2 ? 'border-b-[3px] border-b-[#2B5CE6]' :'border-none'}`}>
                    <h1 className=''>important</h1>
                    </div>
                    <div onClick={()=>setActive(3)} className={` h-[100%] pb-[9px] pl-[5px] hover:cursor-pointer ${active === 3 ? 'border-b-[3px] border-b-[#2B5CE6]' :'border-none'}`}>
                    <h1 className='flex gap-[8px]'>Notes
                    <div className='h-[25px] w-[25px] flex justify-center items-center rounded-full text-[14px] text-[#2B5CE6] bg-[#2b5de62b]'>05</div>
                    </h1>
                    </div>
                    <div onClick={()=>setActive(4)} className={` h-[100%] pb-[9px] pl-[5px] hover:cursor-pointer ${active === 4 ? 'border-b-[3px] border-b-[#2B5CE6]' :'border-none'}`}>
                    <h1 className='flex gap-[8px]'>Links
                    <div className='h-[25px] w-[25px] flex justify-center items-center rounded-full text-[14px] text-[#2B5CE6] bg-[#2b5de62b]'>10</div>
                    </h1>
                    </div>
                </div>
             </div>
             <div className='flex flex-col gap-[12px]  items-center justify-between '>
            {Tasks.map((item,index)=>(
             <div key={index} className='w-full flex justify-between pr-[110px] items-center gap-[65px] '>
                   <div className='flex items-center  justify-between gap-[12px]'>
                     <div className={item.icon ? 'h-[19px] w-[19px] bg-white flex items-center justify-center rounded-full':'h-[19px] w-[19px] border-[1.5px] border-white rounded-full'}>
                     {item.icon && <img src={item.icon} alt="" className='h-[7px] w-[9px]' />}
                     </div>
                     <h1 className='text-[15px] font-medium'>{item.title}</h1>
                   </div>
                   <div className='flex items-center justify-center '>
                   <div className={`${item.class} h-[26px] w-[65px] flex justify-center items-center pt-[3px] pb-[3px] pl-[6px] text-[11px] pr-[6px] rounded-[25px]`}>{item.check}</div>
                   </div>
             </div>
             ))}
             </div>
       </div>
       <div className='h-[350px] w-[40%] bg-[#ffffff54] flex flex-col gap-[20px] rounded-[25px] p-[30px]'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[20px] font-semibold'>Projects Workload</h1>
                <button className='flex items-center font-medium text-[14px] justify-between pl-[12px] pr-[13px] h-[34px] bg-[#FFFFFF] rounded-[25px]'>
                <select name="type" id="type">
                    <option value="project" >Last 3 months</option>
                </select>
               </button>
              </div>
              <div className='h-[80%] '>
                 <ProjectOverloads/>
              </div>
       </div>
    </div>
  )
}

export default Task