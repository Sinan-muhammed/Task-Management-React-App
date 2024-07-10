import React from 'react'
import Overview from '../Components/overview';
import ProjectDe from '../Components/ProjectDe';
import Task from '../Components/Task';

const DashBody = () => {
  return (
    <div>
        <div className='flex items-center justify-between pl-[30px] pr-[30px] pt-[30px]'>
            <h1 className='text-[22px] font-medium'>Overview</h1>
            <button className='flex items-center text-[14px] justify-between pl-[12px] pr-[13px] h-[34px] w-[135px] bg-[#FFFFFF] rounded-[25px]'>
                <select name="type" id="type">
                    <option value="month">Last 30 days</option>
                    <option value="week">Last week</option>
                    <option value="year">Last year</option>
                </select>
            </button>
        </div>
        <div>
            <Overview/>           
            <ProjectDe/>
            <Task/>
        </div>
    </div>
  )
}

export default DashBody