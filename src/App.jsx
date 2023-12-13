import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const readFromStorage = () => {
    const tmp = localStorage.getItem('score')
    console.log(tmp, parseInt(tmp));
    return  parseInt(tmp) || 0
  }
  const [count, setCount] = useState(readFromStorage())
  function increaseCount() {
    setCount((count) => parseInt(count) + 1)
  }
  function decreaseCount() {
    const a = setCount((count) => parseInt(count) - 1)
  }
  useEffect(() => {
    localStorage.setItem('score', count)
  }, [count])
  useEffect(() => {
    localStorage.setItem('score', count)
  }, [])
  
  return (
    <div className='wr'>
      <div className="view">{count}</div>
      <div className="dec" onClick={decreaseCount}>-</div>
      <div className="inc" onClick={increaseCount}>+</div>

      
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
