import { useReducer, useState } from "react"
import Addtodo from "./Components/Addtodo"
import Title from "./Components/TiTle"
import Todoitem from "./Components/Todoitem"
import { TodoItemListContext } from "./store/todoItemContext"
import Demo from "./Components/Demo"


const toduReducer = (todolist,action)=>{

    let newArray  = todolist
    if(action.type=='ADD_ITEM')
    {
      newArray = [...todolist,{name:action.name,date:action.date}]
    }
    else if(action.type=='REMOVE_ITEM')
    {
      newArray = todolist.filter((element)=>element.name!=action.name)
    }

    return newArray
}

const App = ()=>{

 

  // let [todolist, settodolist] = useState([])

  const [todolist,dispatcherTodo] =  useReducer(toduReducer,[])

  const addItemHandler = (name,date)=>{
    
      const addItem = {
        type : "ADD_ITEM",
        name:name,
        date:date
      }
      dispatcherTodo(addItem)
      // const newArray = [...todolist,{name:name,date:date}]
      // settodolist(newArray)
  }

  const deleteItemHandler = (name)=>{

      const removeItem = {
        type : "REMOVE_ITEM",
        name:name
      }
      dispatcherTodo(removeItem)
    //  const Currenttodo =  todolist.filter((element)=>element.name!=name)
    //  settodolist(Currenttodo)
  }

  return <center className="todo-container">
    <TodoItemListContext.Provider value={{todolist,addItemHandler,deleteItemHandler}}>
    <Title></Title>
    <Addtodo></Addtodo>
    <Todoitem></Todoitem>
    
    </TodoItemListContext.Provider>
  </center>
}

export default App