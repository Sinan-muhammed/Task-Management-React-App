import React, { useEffect } from 'react'
import Backlog from '../../public/Backlog.png'
import Board from '../../public/Board.png'
import Feed from '../../public/Feed.png'
import Report from '../../public/Report.png'
import Menu from '../Components/Menu'


const Top = () => {

     const Top = [
        {img:Backlog,name:'Backlog'},
        {img:Board,name:'Board'},
        {img:Feed,name:'Feed'},
        {img:Report,name:'Reports'}
     ]

  return (
    <div className='flex gap-[65px] w-full bg-[#2c2cea89] md:h-[70px] h-[50px] items-center md:justify-center justify-end'>
        {Top.map((items,index)=>(
            <button key={index} className='md:flex gap-[10px] items-center hidden'>
                <img src={items.img} alt={items.name} className='w-[30px] h-[30px]' />
                <h1 className='text-[16px] text-white'>{items.name}</h1>
            </button>
        ))}
        <div className='flex md:hidden pr-[20px]'>
          <Menu value={Top}/>
        </div>
    </div>
  )
}

export default Top