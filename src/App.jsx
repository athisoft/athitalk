import 'bootstrap/dist/css/bootstrap.min.css'
import './MyCustom.css'
import { Routes,Route } from 'react-router-dom'

import HomePage from './Home/HomePage.jsx'
import UserHomepage from './UserHome/UserHomepage'

function App() {

  return (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/userpage" element={<UserHomepage/>} />
  </Routes>
  )
}

export default App
