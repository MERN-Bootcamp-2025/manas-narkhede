import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputType = 'number';
  const minValue = 5;

  return (
    <div>
      <input 
      type={inputType}
      min={minValue}
       />
    </div>
  )
}

export default App
