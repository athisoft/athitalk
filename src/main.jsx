import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Post from './components/Post.jsx'
import HomePage from './Home/HomePage.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/userpage", element:<App/>},
  {path:"/home", element:<Post/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
