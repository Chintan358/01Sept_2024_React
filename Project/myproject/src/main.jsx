import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Components/Shop.jsx';
import Products from './Components/Products.jsx';
import Details from './Components/Details.jsx';
import Contact from './Components/Contact.jsx';
import Registration from './Components/Registration.jsx';
import Login from './Components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Products /> },
      { path: "/shop", element: <Shop /> },
      { path: "/details", element: <Details /> },
      { path: "/contact", element: <Contact /> }
    ]
  },
  {
    path: "/reg", element: <Registration />
  }, {
    path: "/login", element: <Login />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
