import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componants/Home.jsx'
import About from './componants/About.jsx'
import Contact from './componants/Contact.jsx'

const router =  createBrowserRouter([
  {path:"/", element:<App/> , children:[
    {path:"/", element:<Home/>},
    {path:"/about", element:<About/>},
    {path:"/contact", element:<Contact/>} 
  ]},
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
