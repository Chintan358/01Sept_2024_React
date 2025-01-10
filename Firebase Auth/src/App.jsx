import { Outlet, Link } from "react-router-dom"
import Register from "./Components/Register"
import Login from "./Components/Login"
import { useEffect, useState } from "react"
import { auth } from './firestore'
import Home from "./Components/Home"

const App = () => {

  const [users, setusers] = useState()

  const loadcurrentUSer = async () => {
    await auth.onAuthStateChanged((user) => {
      setusers(user)
    })
  }

  useEffect(() => {
    loadcurrentUSer()
  }, [])

  return <>
    {users ? <Home></Home> : <Login></Login>}
  </>
}

export default App