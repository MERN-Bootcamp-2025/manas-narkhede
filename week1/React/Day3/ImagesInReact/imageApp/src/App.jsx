import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import ProfileCard from './components /ProfileCard'

function App() {

  return (
    <div className='container'>
      {/* <img src={AlexaImage} alt="Alexa Image" />
      <img src={CortanaImage} alt="" />
      <img src={SiriImage} alt="" /> */}

      <ProfileCard title="Alexa" handle="@Alexa" image={AlexaImage}/>
      <ProfileCard title="Cortana" handle="@Cortana" image={CortanaImage}/>
      <ProfileCard title="Siri" handle="@siri" image={SiriImage}/>
      



    </div>
  )
}

export default App
