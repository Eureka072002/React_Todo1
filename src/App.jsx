import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
  const [todos, setTodos] = useState([])


  return (
    <div className='flex flex-col items-center p-10'>
      <Navbar />
      <Body />
    </div>
  )
}

export default App
