import { useState } from 'react'
import './App.css'
import ContactDriver from './assets/ContactDriver/ContactDriver'
import TitleDriver from './assets/TitleDriver/TitleDriver';
import DriverInformation from './assets/DriverInformation/DriverInformation';

function App() {

  return (

    <div>

      <TitleDriver />
      <DriverInformation />
      <ContactDriver />

    </div>
  )
}

export default App
