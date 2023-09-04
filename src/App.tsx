import { useState } from 'react'
import './App.css'
import ContactDriver from './assets/ContactDriver/ContactDriver'
import TitleDriver from './assets/TitleDriver/TitleDriver';
import DriverInformation from './assets/DriverInformation/DriverInformation';
import MessageBlock from './assets/MessageBlock/MessageBlock';

function App() {

  return (

    <div>

      <TitleDriver />
      <DriverInformation />
      <ContactDriver /><br/>
      <MessageBlock text='Boris, estou no local já lhe esperando. Estou com camisa azul e calça jeans' photo='baixados.jpg' /><br/>
      <MessageBlock text='Acabei de lhe ver. Vou estacionar o carro próximo.' photo='personPhoto.svg' />

    </div>
  )
}

export default App
