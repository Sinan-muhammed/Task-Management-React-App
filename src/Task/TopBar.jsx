import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const TopBar = ({ setNewItem }) => {
  return (
    <div className="top flex md:flex-row flex-col gap-[22px] items-center justify-between">
      <div className='flex items-center relative'>
        <IoSearchOutline className='h-[20px] w-[20px] text-[#a3a3a3] absolute left-[12px]' />
        <input type="text" placeholder='Search Items' className='h-[40px] w-[318px] border border-[#bfc3c6] pl-[50px] rounded-[5px] bg-[#c4c4c400]' />
      </div>
      <div className='flex gap-[7px]'>
        <button onClick={() => setNewItem(prev => !prev)} className='h-[40px] w-[104px] text-white font-semibold rounded-[5px] bg-[#2121e4c7]'>New Item</button>
        <button className='h-[40px] w-[104px] text-[#C4C4C4] font-semibold rounded-[5px] bg-[#E6ECF0]'>Filter</button>
        <button className='h-[40px] w-[104px] text-[#C4C4C4] font-semibold rounded-[5px] bg-[#E6ECF0]'>Board</button>
      </div>
    </div>
  );
};

export default TopBar;
