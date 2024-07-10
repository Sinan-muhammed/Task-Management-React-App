import React, { useState } from 'react'
import Logo from '../../public/Logo.jpg'
import { FaPlus } from "react-icons/fa6";


import Dash from '../../public/Dashboard.png'
import Project from '../../public/briefcase.png'
import Tasks from '../../public/task.png'
import Cpu from '../../public/cpu-setting.png'
import clock from '../../public/clock.png'
import Data from '../../public/data.png'
import users from '../../public/people.png'
import layer from '../../public/layer.png'
import setting from '../../public/setting-2.png'

import DashWhite from '../../public/Dashboard-white.png'
import ProjectWhite from '../../public/briefcase-white.png'
import TasksWhite from '../../public/task-white.png'
import CpuWhite from '../../public/cpu-white.png'
import clockWhite from '../../public/clock-white.png'
import DataWhite from '../../public/data-white.png'
import usersWhite from '../../public/people-white.png'
import layerWhite from '../../public/layer-white.png'
import settingWhite from '../../public/settings-white.png'



const DashMenu = ({value}) => {

const [active,setActive] = useState(1)

  return (
    <div className='h-[100%]  lg:flex hidden relative pl-[20px] gap-[40px] md:flex-col md:items-center pt-[68px]  ' >
      
        <div className='flex  flex-col  w-full items-center  gap-[50px]'>
          <img src={Logo} alt="" className={`h-[30px] w-[110px] ${value === true ? 'hidden' : 'flex'}`} />
          <div className={`h-[50px]  bg-[#2c2cea89]  flex items-center  gap-[10px]  ${value === true ? 'w-[50px] rounded-full items-center justify-center' : 'w-[190px] rounded-[25px] pl-[7px] pr-[10px]'}`}>
            <button className='h-[35px] w-[35px] rounded-full bg-white flex items-center justify-center'>
                  <FaPlus className='text-[20px] text-[#6369FF]'/>
            </button>
              <h1 className={`text-[14px] text-white ${value === true ? 'hidden' :'flex'}`}>Create new <br /> Project</h1>
          </div>
        </div>
        <div className='flex gap-[8px] flex-col relative '>
            <div>
              <button onClick={()=>setActive(1)} className={`flex h-[50px]  items-center  font-medium  ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 1 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={Dash} alt="" className={`w-[20px] h-[20px] ${active ===1 ? 'hidden' : 'flex'}`}/>
                 <img src={DashWhite} alt="" className={`w-[20px] h-[20px] ${active ===1 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Dashboard</h1>
                </button>
              <button onClick={()=>setActive(2)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 2 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={Project} alt="" className={`w-[20px] h-[20px] ${active === 2 ? 'hidden' : 'flex'}`}/>
                 <img src={ProjectWhite} alt="" className={`w-[20px] h-[20px] ${active === 2 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Projects</h1>
                </button>
              <button onClick={()=>setActive(3)} className={`flex h-[50px] items-center font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 3 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={Tasks} alt="" className={`w-[20px] h-[20px] ${active === 3? 'hidden' : 'flex'}`}/>
                 <img src={TasksWhite} alt="" className={`w-[20px] h-[20px] ${active === 3 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}> <a href="/tasks">Tasks</a></h1>
                </button>
              <button onClick={()=>setActive(4)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'}  ${active === 4 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={Cpu} alt="" className={`w-[20px] h-[20px] ${active === 4 ? 'hidden' : 'flex'}`}/>
                 <img src={CpuWhite} alt="" className={`w-[20px] h-[20px] ${active === 4 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Dashboard</h1>
                </button>
              <button onClick={()=>setActive(5)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 5 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={clock} alt="" className={`w-[20px] h-[20px] ${active === 5 ? 'hidden' : 'flex'}`}/>
                 <img src={clockWhite} alt="" className={`w-[20px] h-[20px] ${active === 5 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Time log</h1>
                </button>
              <button onClick={()=>setActive(6)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 6 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={Data} alt="" className={`w-[20px] h-[20px] ${active === 6 ? 'hidden' : 'flex'}`}/>
                 <img src={DataWhite} alt="" className={`w-[20px] h-[20px] ${active === 6 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Resource mgnt</h1>
                </button>
              <button onClick={()=>setActive(7)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 7 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={users} alt="" className={`w-[20px] h-[20px] ${active === 7 ? 'hidden' : 'flex'}`}/>
                 <img src={usersWhite} alt="" className={`w-[20px] h-[20px] ${active === 7 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Users</h1>
                </button>
              <button onClick={()=>setActive(8)} className={`flex h-[50px] items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 8 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={layer} alt="" className={`w-[20px] h-[20px] ${active === 8 ? 'hidden' : 'flex'}`}/>
                 <img src={layerWhite} alt="" className={`w-[20px] h-[20px] ${active === 8 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Project template</h1>
                </button>
              <button onClick={()=>setActive(9)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 9 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                 <img src={setting} alt="" className={`w-[20px] h-[20px] ${active === 9 ? 'hidden' : 'flex'}`}/>
                 <img src={settingWhite} alt="" className={`w-[20px] h-[20px] ${active === 9 ? 'flex' : 'hidden'}`}/>
                 <h1 className={value === true ? 'hidden' :'flex'}>Menu settings</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashMenu