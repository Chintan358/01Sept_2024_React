import { createContext ,useReducer} from "react";

export const TodoItemListContext =  createContext([]) 
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
const TodoItemContextProvider = (props)=>{
    const [todolist,dispatcherTodo] =  useReducer(toduReducer,[])

  const addItemHandler = (name,date)=>{
    
      const addItem = {
        type : "ADD_ITEM",
        name:name,
        date:date
      }
      dispatcherTodo(addItem)
      
  }

  const deleteItemHandler = (name)=>{

      const removeItem = {
        type : "REMOVE_ITEM",
        name:name
      }
      dispatcherTodo(removeItem)
    
  }

  return <TodoItemListContext.Provider value={{todolist,addItemHandler,deleteItemHandler}}>
  {props.children}
  
  </TodoItemListContext.Provider>
}

export default TodoItemContextProvider