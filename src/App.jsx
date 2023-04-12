import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './components/Footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
