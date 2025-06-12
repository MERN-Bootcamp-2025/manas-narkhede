import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Hello, I am Manas</h1>
      <p>I am A fullStack Devloper learning MERN and Java stack</p>
      <p>Here are the Few things about me :</p>
      <ul>
        <li>Currently Learning MERN</li>
        <li>Like to play Cricket and Chess</li>
        <li>{new Date().toLocaleDateString()}</li>
      </ul>
    </div>
  )
}

export default App
