import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar."
import Products from "./Components/Products"
import Shop from "./Components/Shop"
import Topbar from "./Components/Topbar"
import ProductListContextProvider from "./store/ProductList-store"
import { useContext, useEffect } from "react"
import  ProductListcontext from "./store/ProductList-store"

const App = ()=>{




  return <>
  
  <ProductListContextProvider>
  <Topbar/>
  <Navbar/>
  {/* <Products/>
  <Shop/> */}
  <Outlet></Outlet>
  <Footer/>
  </ProductListContextProvider>

  </>
}

export default App