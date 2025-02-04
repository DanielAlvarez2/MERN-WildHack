import { useState } from 'react'
import './App.css'
import Demo from './components/Demo/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Demo />
    </>
  )
}

export default App
