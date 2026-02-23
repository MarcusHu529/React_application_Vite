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

function CharacterList() {
  return (
    <div className="card">
      <h3>Available Power Forms</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {characterForms.map((form) => (
          <li 
            key={form.id} 
            style={{ color: form.power === 'Godly' ? '#61dafb' : 'white', marginBottom: '10px' }}
          >
            {form.name} — Power Level: {form.power}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BattleStatus() {
  const isBattleActive = true;
  return (
    <div className="status-box">
      {isBattleActive ? <h2>STATUS: IN COMBAT</h2> : <h2>STATUS: TRAINING</h2>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BattleStatus />
      
      <div>
        <img
          src={gokuVsVegeta}
          className="logo"
          alt="Goku vs Vegeta"
          style={{ width: "400px", height: "auto" }}
        />
      </div>

      <CharacterList />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase Power Level: {count}
        </button>
        
        <div style={{ marginTop: '20px' }}>
          {count > 10 ? (
            <h2 style={{ color: 'red' }}>IT'S OVER 9000!</h2>
          ) : (
            <p>Gathering energy: {count}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App