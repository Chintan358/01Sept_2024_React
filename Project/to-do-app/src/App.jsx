import { useState } from "react"
import Addtodo from "./Components/Addtodo"
import Title from "./Components/TiTle"
import Todoitem from "./Components/Todoitem"

const App = ()=>{

  // const todolist = [{name:"Assignment",date:"10/09/2024"},{name:"Project",date:"11/09/2024"},{name:"Project",date:"11/09/2024"}]

  let [todolist, settodolist] = useState([])

  const addItemHandler = (name,date)=>{
    
      const newArray = [...todolist,{name:name,date:date}]
      settodolist(newArray)
  }

  const deleteItemHandler = (name)=>{

     const Currenttodo =  todolist.filter((element)=>element.name!=name)
     settodolist(Currenttodo)
  }

  return <center className="todo-container">
    <Title></Title>
    <Addtodo onbuttonclick={addItemHandler}></Addtodo>
    <Todoitem todoitemlist={todolist} onDeleteButtonClick={deleteItemHandler}></Todoitem>
  </center>
}

export default App