import './App.css'

import HelloWord from './components/HelloWord'
import Slot from './components/Slot'
import Placar from './components/Placar'
import Relogio from './components/Relogio'

function App() {

  return (
    <>
      <h1>Overview ReactJs</h1>

      <Relogio />
      <Placar localEvento="Estádio do Maracanã"  data="15/0212024"/>
    </>
  )
}

export default App
