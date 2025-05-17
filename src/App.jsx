import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyCustom.css'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>
    <div className='row'>
    <Sidebar/>
    <Main/>
    </div>
    <Footer/>
    </>
  )
}

export default App
