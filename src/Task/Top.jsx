import React, { useEffect } from 'react'
import Backlog from '../../public/Backlog.png'
import Board from '../../public/Board.png'
import Feed from '../../public/Feed.png'
import Report from '../../public/Report.png'


const Top = () => {

     const Top = [
        {img:Backlog,name:'Backlog'},
        {img:Board,name:'Board'},
        {img:Feed,name:'Feed'},
        {img:Report,name:'Reports'}
     ]

  return (
    <div className='flex gap-[65px] w-full bg-[#2c2cea89] h-[70px] items-center justify-center'>
        {Top.map((items,index)=>(
            <button key={index} className='flex gap-[10px] items-center'>
                <img src={items.img} alt={items.name} className='w-[30px] h-[30px]' />
                <h1 className='text-[16px] text-white'>{items.name}</h1>
            </button>
        ))}
    </div>
  )
}

export default Top