import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyCustom.css'
import TopNavigation from './components/TopNavigation'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNavigation/>
    <div className='contents container shadow-sm'>

   
    <div className='row'>
    <Sidebar/>
    <Main/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
