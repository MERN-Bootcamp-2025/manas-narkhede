import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Manas</h1>
      <p>Welcome to My Page</p>
      <div>{new Date().toLocaleDateString()}</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  )
}

export default App
