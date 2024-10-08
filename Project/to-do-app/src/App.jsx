import { useState } from "react"
import Addtodo from "./Components/Addtodo"
import Title from "./Components/TiTle"
import Todoitem from "./Components/Todoitem"
import { TodoItemListContext } from "./store/todoItemContext"
import Demo from "./Components/Demo"
const App = ()=>{

  //  const todolist1 = [{name:"Assignment",date:"10/09/2024"},{name:"Project",date:"11/09/2024"},{name:"Project",date:"11/09/2024"}]

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
    <TodoItemListContext.Provider value={todolist}>
    <Title></Title>
    <Addtodo onbuttonclick={addItemHandler}></Addtodo>
    <Todoitem  onDeleteButtonClick={deleteItemHandler}></Todoitem>
    <Demo></Demo>
    </TodoItemListContext.Provider>
  </center>
}

export default App