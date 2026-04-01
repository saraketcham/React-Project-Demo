import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Profile from "./Pages/MyProfile"
import TaskCreate from "./Pages/TaskCreate"
import BasicText from './BasicText'
import TaskCard from './TaskCard'

function App() {

  return (
    <>
    <BrowserRouter>
      <nav className="flex justify-between items-center">
     
        <Link to="/">Home</Link> 
   
        <Link to="/about">About</Link> 
     
        <Link to="/profile">Profile</Link>
       
        <Link to="/taskcreate">New Task</Link>
          
         
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/taskcreate" element={<TaskCreate />} />

      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App