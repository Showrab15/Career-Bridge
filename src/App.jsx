import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default App
