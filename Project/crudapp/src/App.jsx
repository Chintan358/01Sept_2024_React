import { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import UserTitle from "./Components/UserTitle";
import { TodoliststoreContext } from "./store/todolist-store";

const App = ()=>{

  const [userlist, setUserList] = useState([])

  const addUserHandler = (name,email,pass)=>{
    
    const newList = [...userlist,{name:name,email:email,pass:pass}]
    setUserList(newList)

  }

  const removehandler = (name)=>{

    const newList = userlist.filter((user)=>user.name!==name)
    setUserList(newList)
  }

  return <>
  <TodoliststoreContext.Provider value={{userlist,addUserHandler,removehandler}}>
  <UserTitle></UserTitle>
  <div className="container">
    <div className="row">
      <UserForm></UserForm>
      <UserList></UserList>
    </div>
    </div>
    </TodoliststoreContext.Provider>
  </>

}

export default App;