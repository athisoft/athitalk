import { useState } from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyCustom.css'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
