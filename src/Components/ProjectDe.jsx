import React from 'react'
import SpeedometerChart from './charts/chart'

const ProjectDe = () => {
  return (
    <div className='w-[100%] pt-[30px] pl-[30px] pr-[30px] flex gap-[30px]'>
        <div className='h-[400px] w-[60%] bg-[#ffffff54] rounded-[25px]'>
          <div className='flex justify-between pt-[18px] pl-[18px] pr-[18px]'>
            <h1 className='text-[20px] font-semibold'>Project summary</h1>
            <div className='flex gap-[12px]'>
            <button className='flex items-center font-medium text-[14px] justify-between pl-[12px] pr-[13px] h-[34px] bg-[#FFFFFF] rounded-[25px]'>
                <select name="type" id="type">
                    <option value="project" >Project</option>
                </select>
            </button>
            <button className='flex items-center font-medium text-[14px] justify-between pl-[12px] pr-[13px] h-[34px] bg-[#FFFFFF] rounded-[25px]'>
                <select name="type" id="type">
                    <option value="project-manager">Project manager</option>
                </select>
            </button>
            <button className='flex items-center font-medium text-[14px] justify-between pl-[12px] pr-[13px] h-[34px]  bg-[#FFFFFF] rounded-[25px]'>
                <select name="type" id="type">
                    <option value="status">Status</option>
                </select>
            </button>
            </div>
          </div>
           <div className='p-[30px] '>
            <table className='w-full h-full leading-[40px] text-[#1D2D35] font-medium  text-left'>
                <tr className='w-[100%]  h-[16%] border-b-[1px] border-b-[#00000015]'>
                    <th className='w-[30%] text-[16px] h-[16%] flex '>Name</th>
                    <th className='w-[17%] text-[16px] h-[16%]'>Project manager</th>
                    <th className='w-[17%] text-[16px] h-[16%]'>Due date</th>
                    <th className='w-[17%] text-[16px] h-[16%]'>status</th>
                    <th className='w-[17%] text-[16px] h-[16%]'>Progress</th>
                </tr>
                <tr className='w-[100%] h-[50px]'>
                    <td className='w-[30%]'>Nelsa web developement</td>
                    <td className='w-[17%]'>Om prakash sao</td>
                    <td className='w-[17%]'>May 25,2023</td>
                    <td className='w-[17%] '>
                    <button className='pl-[8px] leading-[15px] pr-[8px] bg-green-600 text-[13px] pb-[5px] pt-[5px] text-white rounded-[25px]'>Completed</button>
                    </td>
                    <td className='w-[17%]'>
                        <div className='h-[40px] w-[40px] border-[5px] flex justify-center items-center border-green-600 rounded-full'>
                            <p className='text-[12px]'>100%</p>
                        </div>
                    </td>
                </tr>
                <tr className='w-[100%] h-[50px]'>
                    <td className='w-[30%]'>Datascale AI app</td>
                    <td className='w-[17%%]'>Neilsan mando</td>
                    <td className='w-[17%%]'>Jun 20, 2023</td>
                    <td className='w-[17%%]'>
                       <button className='pl-[8px] pr-[8px] leading-[15px] bg-yellow-500 text-[13px] pb-[5px] pt-[5px] text-white rounded-[25px]'>Delayed</button>
                    </td>
                    <td className='w-[17%]'>
                    <div className='h-[40px] w-[40px] border-[5px] flex justify-center border-[#1d2d3535] items-center border-r-yellow-500 rounded-full'>
                            <p className='text-[12px]'>35%</p>
                        </div>
                    </td>
                </tr>
                <tr className='w-[100%] h-[50px]'>
                    <td>Media channel branding</td>
                    <td>Tiruvelly priya</td>
                    <td>July 13, 2023</td>
                    <td>
                         <button className='pl-[8px] pr-[8px] leading-[15px] bg-red-600 text-[13px] pb-[5px] pt-[5px] text-white rounded-[25px]'>At risk</button>
                    </td>
                    <td>
                    <div className='h-[40px] w-[40px] border-[5px]  flex justify-center border-[#1d2d3535] items-center border-l-red-500 border-r-red-500 border-b-red-500 rounded-full'>
                            <p className='text-[12px]'>68%</p>
                        </div>
                    </td>
                </tr>
                <tr className='w-[100%] h-[50px]'>
                    <td>Corlax iOS app develpoement</td>
                    <td>Matte hannery</td>
                    <td>Dec 20, 2023</td>
                    <td>
                    <button className='pl-[8px] pr-[8px] bg-green-600 leading-[15px] text-[13px] pb-[5px] pt-[5px] text-white rounded-[25px]'>Completed</button>
                    </td>
                    <td>
                    <div className='h-[40px] w-[40px] border-[5px]  flex justify-center items-center border-green-600 rounded-full'>
                            <p className='text-[12px]'>100%</p>
                        </div>
                    </td>
                </tr>
                <tr className='w-[100%] h-[50px]'>
                    <td>Website builder developement</td>
                    <td>Sukumar rao</td>
                    <td>Mar 15, 2024</td>
                    <td>
                    <button className='pl-[8px] pr-[8px] bg-orange-600 leading-[15px] text-[13px] pb-[5px] pt-[5px] text-white rounded-[25px]'>On going</button>
                    </td>
                    <td>
                    <div className='h-[40px]  w-[40px] border-[5px] flex justify-center border-[#1d2d3535] items-center  border-r-orange-500 border-b-orange-500 rounded-full'>
                            <p className='text-[12px]'>50%</p>
                        </div>
                    </td>
                </tr>
            </table>
           </div>
        </div>
        <div className='h-[400px] w-[40%] flex p-[22px] rounded-[25px] bg-[#ffffff54]'>
             <SpeedometerChart/>
        </div>
    </div>
  )
}

export default ProjectDe