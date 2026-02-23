import { useState } from 'react'
import gokuVsVegeta from './assets/goku-vs-vegeta.png'
import './App.css'

const characterForms = [
  { id: 1, name: 'Base Form', power: 'Normal', isSaiyan: true },
  { id: 2, name: 'Super Saiyan', power: 'High', isSaiyan: true },
  { id: 3, name: 'Ultra Instinct', power: 'Godly', isSaiyan: true },
];

function Header() {
  return (
    <header>
      <h1>Dragon Ball</h1>
    </header>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <img
          src={gokuVsVegeta}
          className="logo"
          alt="Goku vs Vegeta"
          style={{ width: "400px", height: "auto" }}
        />
      </div>
      <h1>Goku vs Vegeta</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
