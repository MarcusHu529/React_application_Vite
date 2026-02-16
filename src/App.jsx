import { useState } from 'react'
import gokuVsVegeta from './assets/goku-vs-vegeta.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
