import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './Components/Form.jsx'
import FormData from './Components/FormData.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/", element: <Provider store={store}> <App></App></Provider>, children: [{
      path: "/", element: <Form></Form>
    },
    {
      path: "/display", element: <FormData></FormData>
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
