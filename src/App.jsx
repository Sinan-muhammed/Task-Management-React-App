import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Dashboard/DashBoard";
import Tasks from "./Task/Tasks";

function App() {

  return (
    <>
     <BrowserRouter>
     {/* // DashBoard page router */}
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
      </Routes>
      {/* // Task Management page  router */} 
      <Routes>
      <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App