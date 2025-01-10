import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home.jsx'
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/reg", element: <Register /> },
  { path: "/home", element: <Home></Home> }

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
