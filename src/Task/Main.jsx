import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import axios from 'axios'
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Todos from './Todos';
import Tasks from './Tasks';



const Main = () => {
  
  const [newItem,setNewItem] = useState(false)

  const [Todo,setTodo] = useState('')
  const [ToDos,setToDos] = useState([])
  const [update,setUpdate] = useState(null)

  const [Task, setTask] = useState('');
  const [TaskS,setTaskS] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:5000/tasks')
    .then(response => {
      setToDos(response.data)
    })
    .catch(error => {
      console.error('Error fetching Tasks ', error);
    })
  },[])


  const addToDu = ()=>{
    const newToDo = {title : Todo , completed : false,tasks:[]}

    axios.post('http://localhost:5000/tasks',newToDo)
     .then(response => {
       setToDos([...ToDos,response.data])
       setTodo('')
       setNewItem(false)
     })
     .catch(error => {
      console.log('Error adding Task',error);
     })
  }

  const toggleUpdate = (todo)=>{
    setUpdate(update === todo ? null : todo )
  }


  const addTask = () => {
    // const addTasks = [...TaskS, Task];
    const newTask = {title:'hey',description:'happy new year'}

    axios.post(`http://localhost:5000/tasks/${todo.id}/tasks`, newTask)
      .then(response => {
        setToDos(ToDos.map(todo => todo.id  ? response.data : todo));
        setTask('');
      })
      .catch(error => {
        console.log('Error updating Task', error);
      });
  }
 
  
  return (
    <>
    
    <div className='pt-[18px] md:pl-[96px] md:pr-[96px] flex flex-col gap-[18px] relative'>
        <div className="top flex md:flex-row flex-col gap-[22px]  items-center justify-between ">
            <div className='flex items-center relative'>
            <IoSearchOutline className='h-[20px] w-[20px] text-[#a3a3a3] absolute left-[12px]' />
            <input type="text" placeholder='Search Items' className='h-[40px] w-[318px] border border-[#bfc3c6]  pl-[50px] rounded-[5px] bg-[#c4c4c400]'/>
            </div>
            <div className='flex gap-[7px]'>
                <button onClick={()=>setNewItem((prev)=>!prev)} className='h-[40px] w-[104px] text-white font-semibold rounded-[5px] bg-[#2121e4c7]'>New Item</button>
                <button className='h-[40px] w-[104px] text-[#C4C4C4] font-semibold rounded-[5px] bg-[#E6ECF0]'>Filter</button>
                <button className='h-[40px] w-[104px] text-[#C4C4C4] font-semibold rounded-[5px] bg-[#E6ECF0]'>Board</button>
            </div>
        </div>
        <div className='card h-[100%] pb-[50px] w-full flex overflow-x-scroll  gap-[12px] md:gap-[26px] md:pl-0 md:pr-0 pl-[25px] pr-[15px] '>
          {ToDos.map((todo,index)=>(
           <div key={index} className={` h-max md:min-w-[23%] w-[320px] bg-[#E6ECF0] pl-[16px] pr-[16px] pt-[14px] pb-[15px] flex-col justify-between gap-[20px] ${todo ? 'flex' : 'hidden'}`}>
             <div className='flex w-full items-center justify-between'>
                  <div className='flex items-center gap-[21px]'>
                    <h1 className='text-[16px] font-bold'>{todo.title}</h1>
                    <div className='h-[30px] w-[30px] bg-[#D5D5D5] rounded-full flex items-center justify-center font-semibold'>3</div>
                  </div>
                  <div className='flex items-center relative justify-center gap-[7px]'>
                  <div onClick={()=>setTaskS([...Tasks,Task])} className='h-[30px] w-[30px] bg-[#D5D5D5] text-[12px] rounded-full flex items-center justify-center font-semibold hover:cursor-pointer'> <FaPlus/> </div>
                  <div onClick={()=> toggleUpdate(todo)} className='h-[30px] w-[30px] bg-[#D5D5D5] rounded-full flex items-center justify-center font-semibold'> <HiOutlineDotsHorizontal /> </div>
                  
               {update === todo && (
                   <div className='flex flex-col absolute bg-[#334beb39] p-[5px]   h-[80px] w-[50px] top-[50px] left-[35px] rounded-[15px]  justify-center gap-[16px] items-center '>   
                    <button className='flex items-center justify-center gap-[2px] text-[15px]'><MdEdit /> </button>
                    <button  className='flex items-center justify-center gap-[2px] text-[15px]'><FaTrash /> </button>
                   </div>
               )}
                  </div>
             </div>
               <div>
                <Todos tasks={todo.tasks} add={addTask}/>
               </div>
           </div>
          ))}
        </div>
          
    </div>
          <div className={`md:h-[100px] md:w-[333px] h-[80px] w-[290px] top-[250px] right-[50px] pl-[25px] pr-[25px] pb-[15px] pt-[15px] bg-[#2c2cea88] absolute rounded-[8px]   md:top-[220px] md:right-[200px] flex flex-col gap-[10px] ${newItem ? 'flex' : 'hidden'}`}>           
            <input type="text" name='title' onChange={(e)=>setTodo(e.target.value)} value={Todo}  placeholder='Title' className='h-[30px] pl-[15px] w-[250px]' />
            <button onClick={addToDu}  className='h-[35px] w-[100px] bg-[#E6ECF0] rounded-[5px]'>Add Item</button>        
          </div>

          
    </>
  )
}

export default Main