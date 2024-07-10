import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import chart from '../../public/chart.png'
import projects from '../../public/briefcase-white.png'
import clock from '../../public/clock-white.png'
import Resources from '../../public/person.png'

const Overview = () => {
  const Content = [
    {div:'bg-[#D398E7]',image:chart,head1:'Total revenue',number:'$53,00989',status:<GoArrowUpRight className='text-[#1A932E]'/>,text:'12% increase from last month'},
    {div:'bg-[#E89271]',image:projects,head1:'Projects',number:'95',numb2:'/100',status:<GoArrowDownRight className='text-[#EE201C]'/>,text:'10% decrease from last month'},
    {div:'bg-[#70A1E5]',image:clock,head1:'Time spent',number:'1022',numb2:'/1300 Hrs',status:<GoArrowUpRight className='text-[#1A932E]'/>,text:'8% increase from last month'},
    {div:'bg-[#F0C274]',image:Resources,head1:'Resources',number:'101',numb2:'/120',status:<GoArrowUpRight className='text-[#1A932E]'/>,text:'2% increase from last month'},
    
  ]
  return (
    <div className='flex gap-[25px] pl-[30px] pr-[30px] pt-[30px]'>
      {Content.map((item,index)=>(
        <div key={index} className='h-[246px] w-[329px] flex justify-between pl-[22px] pt-[22px] pb-[32px] flex-col bg-[#ffffff54] rounded-[25px]'>
          <div className={`${item.div} h-[50px] w-[50px] rounded-full flex justify-center items-center`}>            
            <img src={item.image} alt="" className='h-[22px] w-[22px]' />
          </div>
            <h1 className='text-[16px] font-semibold text-[#797979]'>{item.head1}</h1>
            <div className='flex items-baseline gap-[8px]'>              
            <h1 className='text-[28px] font-semibold'>{item.number}</h1>
            <h1 className='text-[20px] font-semibold'>{item.numb2}</h1>
            </div>
            <div className='flex items-center gap-[6px]'>
              <h1 className='text-[25px]'>{item.status}</h1>
              <h1 className='font-normal'>{item.text}</h1>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Overview