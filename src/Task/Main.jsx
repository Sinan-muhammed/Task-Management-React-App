import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import Todos from './Todos';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Main = () => {
  const [newItem, setNewItem] = useState(false);
  const [Todo, setTodo] = useState({ title: '' });
  const [ToDos, setToDos] = useState([]);
  const [update, setUpdate] = useState(null);
  const [TaskS, setTaskS] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setToDos(response.data);
      })
      .catch(error => {
        console.error('Error fetching Tasks', error);
      });
  }, []);

  const addToDu = () => {
    const newToDo = { title: Todo.title, completed: false, tasks: [] };

    axios.post('http://localhost:5000/tasks', newToDo)
      .then(response => {
        setToDos([...ToDos, response.data]);
        setTodo({ title: '' });
        setNewItem(false);
      })
      .catch(error => {
        console.error('Error adding Task', error);
      });
  };

  const toggleUpdate = (todo) => {
    setUpdate(update === todo ? null : todo);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = Array.from(ToDos);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);
    setToDos(reorderedTasks);
  };

  return (
    <>
      <div className='pt-[18px] md:pl-[96px] md:pr-[96px] flex flex-col gap-[18px] relative'>
        <div className="top flex md:flex-row flex-col gap-[22px] items-center justify-between">
          <div className='flex items-center relative'>
            <IoSearchOutline className='h-[20px] w-[20px] text-[#a3a3a3] absolute left-[12px]' />
            <input type="text" placeholder='Search Items' className='h-[40px] w-[318px] border border-[#bfc3c6] pl-[50px] rounded-[5px] bg-[#c4c4c400]' />
          </div>
          <div className='flex gap-[7px]'>
            <button onClick={() => setNewItem(true)} className='h-[40px] w-[104px] text-white font-semibold rounded-[5px] bg-[#2121e4c7]'>New Item</button>
            <button className='h-[40px] w-[104px] text-[#C4C4C4] font-semibold rounded-[5px] bg-[#E6ECF0]'>Filter</button>
            <button className='h-[40px] w-[104px] text-[#C4C4C4] font-semibold rounded-[5px] bg-[#E6ECF0]'>Board</button>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <div className='card h-[100%] pb-[50px] w-full flex overflow-x-scroll gap-[12px] md:gap-[26px] md:pl-0 md:pr-0 pl-[25px] pr-[15px]' {...provided.droppableProps} ref={provided.innerRef}>
                {ToDos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`h-max md:min-w-[23%] w-[320px] bg-[#E6ECF0] pl-[16px] pr-[16px] pt-[14px] pb-[15px] flex-col justify-between gap-[20px] ${todo ? 'flex' : 'hidden'}`}>
                        <div className='flex w-full items-center justify-between'>
                          <div className='flex items-center gap-[21px]'>
                            <h1 className='text-[16px] font-bold'>{todo.title}</h1>
                            <div className='h-[30px] w-[30px] bg-[#D5D5D5] rounded-full flex items-center justify-center font-semibold'>3</div>
                          </div>
                          <div className='flex items-center relative justify-center gap-[7px]'>
                            <div onClick={() => setTaskS((prev) => !prev)} className='h-[30px] w-[30px] bg-[#D5D5D5] text-[12px] rounded-full flex items-center justify-center font-semibold hover:cursor-pointer'>
                              <FaPlus />
                            </div>
                            <div onClick={() => toggleUpdate(todo)} className='h-[30px] w-[30px] bg-[#D5D5D5] rounded-full flex items-center justify-center font-semibold'>
                              <HiOutlineDotsHorizontal />
                            </div>
                            {update === todo && (
                              <div className='flex flex-col absolute bg-[#334beb39] p-[5px] h-[80px] w-[50px] top-[50px] left-[35px] rounded-[15px] justify-center gap-[16px] items-center'>
                                <button className='flex items-center justify-center gap-[2px] text-[15px]'><MdEdit /></button>
                                <button className='flex items-center justify-center gap-[2px] text-[15px]'><FaTrash /></button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <Todos tasks={TaskS} todo={todo} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {newItem && (
        <div className='md:h-[100px] md:w-[333px] h-[80px] w-[290px] top-[250px] right-[50px] pl-[25px] pr-[25px] pb-[15px] pt-[15px] bg-[#2c2cea88] absolute rounded-[8px] md:top-[220px] md:right-[200px] flex flex-col gap-[10px]'>
          <input type="text" name='title' onChange={(e) => setTodo({ ...Todo, title: e.target.value })} value={Todo.title} placeholder='Title' className='h-[30px] pl-[15px] w-[250px]' />
          <button onClick={addToDu} className='h-[35px] w-[100px] bg-[#E6ECF0] rounded-[5px]'>Add Item</button>
        </div>
      )}
    </>
  );
}

export default Main;
