import React from 'react'
import Top from './Top'
import TaskHead from '../Components/TaskHead'
import Main from './Main'

const Tasks = () => {
  return (
   <div>
        <div>
            <Top/>
        </div>
       <div>
        <TaskHead/>
       </div>
        <div>
          <Main/>
        </div>
   </div>
  )
}

export default Tasks