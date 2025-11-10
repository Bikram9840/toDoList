import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../src/Component/Home.jsx'
import About from '../src/Component/About.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
    {
    path: "/home",
    element: <Home/>
  },
      {
    path: "/about",
    element: <About/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
