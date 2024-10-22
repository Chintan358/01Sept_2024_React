import { useState } from 'react'
import './App.css'
import Createpost from './components/Createpost'
import Footer from './components/Footer'
import Header from './components/Header'
import Listpost from './components/Listpost'
import Sidebar from './components/Sidebar'
import PostlistContextProvider from './store/postlist-store'

function App() {
 
    const [page, setPage] = useState("Home")

    return <div className='item-container'>
      <PostlistContextProvider>
      <Sidebar page={page} setPage={setPage}></Sidebar>
      <div className='content'>
      <Header></Header>
      {page === "Home"? <Listpost></Listpost>:<Createpost></Createpost>}
      <Footer></Footer>
      </div>
      </PostlistContextProvider>
    </div>
  
  
}

export default App
