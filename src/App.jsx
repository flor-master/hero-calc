import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const readFromStorage = () => parseInt(localStorage.getItem('score')) || 0
  const [count, setCount] = useState(readFromStorage())

  function increaseCount() {
    setCount((count) => parseInt(count) + 1)
  }
  function decreaseCount() {
    setCount((count) => parseInt(count) - 1)
  }
  function resetCount() {
    setCount(0)
  }

  useEffect(() => {
    localStorage.setItem('score', count)
  }, [count])
  useEffect(() => {
    localStorage.setItem('score', count)
  }, [])
  
  return (
    <div className='wr'>
      <div className="view">
        {count}
        <button className='button reset' onClick={resetCount}>X</button>
      </div>
      <div className="button dec" onClick={decreaseCount}>-</div>
      <div className="button inc" onClick={increaseCount}>+</div>
    </div>
  )
}

export default App
