import React, { useState } from 'react';
import { BsPaperclip } from "react-icons/bs";
import { RiFlagFill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";
import person from '../../public/Avatar.png';
import axios from 'axios';

const Todos = ({ todo, tasks }) => {
  const [Task, setTask] = useState({ title: '', description: '' });

  const handleAddTask = () => {
    const newTask = {
      title: Task.title,
      description: Task.description,
    };

    axios.post(`http://localhost:5000/tasks/${todo.id}/tasks`, newTask)
      .then(response => {
        // Update the tasks state for the corresponding todo item
        setTask({ title: '', description: '' });
        // Refresh the todo item to include the new task
      })
      .catch(error => {
        console.error('Error adding Task', error);
      });
  };

  return (
    <div className={tasks ? 'flex' : 'hidden'}>
      <div className='h-auto w-[100%] bg-[#FFFFFF] rounded-[3px]'>
        <div className='pt-[12px] pl-[12px] pb-[12px] flex flex-col gap-[12px]'>
          <input
            type="text"
            placeholder='Title'
            onChange={(e) => setTask({ ...Task, title: e.target.value })}
            value={Task.title}
          />
          <input
            type="text"
            placeholder='Description'
            onChange={(e) => setTask({ ...Task, description: e.target.value })}
            value={Task.description}
          />
          <div>
            <button onClick={handleAddTask} className='h-[30px] max-w-none flex items-center p-[15px] bg-[#2c2cea88] font-semibold text-white rounded-[4px]'>
              Add Task
            </button>
          </div>
        </div>
        <div className='w-full h-[46px] flex border-t border-[#C4C4C4] items-center justify-between pl-[15px] pr-[15px]'>
          <div className='flex gap-[25px]'>
            <BsPaperclip className='w-[22px] h-[22px]' />
            <RiFlagFill className='w-[22px] h-[22px]' />
            <GoClockFill className='w-[22px] h-[22px]' />
          </div>
          <div className='h-[30px] w-[30px]'>
            <img src={person} alt="person" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;

