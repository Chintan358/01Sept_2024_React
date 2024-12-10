import { Link, Outlet } from "react-router-dom"
import Home from "./componants/Home"

const App = ()=>{

    return <>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link>
      <Outlet></Outlet>

    </>

}

export default App