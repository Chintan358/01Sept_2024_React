import { useReducer, useState } from "react"
import Addtodo from "./Components/Addtodo"
import Title from "./Components/TiTle"
import Todoitem from "./Components/Todoitem"
import TodoItemContextProvider, { TodoItemListContext } from "./store/todoItemContext"
import Demo from "./Components/Demo"




const App = ()=>{


  return <center className="todo-container">
    <TodoItemContextProvider>
      <Title></Title>
      <Addtodo></Addtodo>
      <Todoitem></Todoitem>
    </TodoItemContextProvider>
  </center>
}

export default App