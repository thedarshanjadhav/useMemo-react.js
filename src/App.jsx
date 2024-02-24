import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(10_000_000).fill(0).map((_, i)=>{
  return{
    index: i,
    isMagical: i===7_000_000
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [numbers] = useState(nums);

  // const magical = numbers.find(item=>item.isMagical===true) //expensive computation

  const magical = useMemo(()=> numbers.find(item=>item.isMagical===true),[])

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
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
      </p>
    </>
  )
}

export default App
