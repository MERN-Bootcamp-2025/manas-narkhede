import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={AlexaImage} alt="Alexa Image" />
      <img src={CortanaImage} alt="" />
      <img src={SiriImage} alt="" />



    </div>
  )
}

export default App
