import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './pages/homepage'
import LoginWithGoogle from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <LoginWithGoogle/>
    </>
  )
}

export default App
