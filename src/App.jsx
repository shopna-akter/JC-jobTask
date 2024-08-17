import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const handleSubstract = () => {
    if (0 >= count) {
      alert('minimum number is reached')
    }
    else {
      setCount(count - 1)
    }
  }
  const handleIncrease = () => {
    if (count >= 150) {
      alert('maximum number is reached')
    }
    else {
      setCount(count + 1)
    }
  }
  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <label>{count}</label>
        </div>
        <div className='flex'>
          <h2 className='mr-2'>0</h2>
          <progress className="progress progress-bar w-56 mt-2" value={count} max="150"></progress>
          <h2 className='ml-2'>150</h2>
        </div>
      </div>
      <div className="flex">
        <button onClick={handleSubstract} className='btn btn-ghost'>Substract</button>
        <button onClick={handleIncrease} className='btn btn-ghost'>Increase</button>
      </div>
    </div>
  )
}

export default App
