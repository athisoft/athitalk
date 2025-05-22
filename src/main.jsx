import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { BrowserRouter } from 'react-router-dom'

// import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {path:"/", element:<HomePage/>},
//   {path:"/userpage", element:<App/>},
//   {path:"/home", element:<Post/>},
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
