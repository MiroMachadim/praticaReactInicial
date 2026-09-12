import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HelloWorld from './components/Inicial.jsx'
import SobreMim from './components/Apresentar.jsx'
import { Somar,Dividir, Multiplica, Subtrair } from './components/Calculadora.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <HelloWorld/>
       </div>
       <div className='apresentar'>
        <SobreMim/>
        <Somar/>
        <Subtrair/>
        <Multiplica/>
        <Dividir/>
       </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
