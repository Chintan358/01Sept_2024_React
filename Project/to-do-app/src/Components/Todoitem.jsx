import { useContext } from "react"
import { TodoItemListContext } from "../store/todoItemContext"
import Item from "./Item"
import style from "./Todoitem.module.css"

const Todoitem = ()=>{

     const  {todolist} =  useContext(TodoItemListContext)
   
    

    return <>{todolist.map((item)=><Item key={item.name} todoname={item.name} tododate={item.date} ></Item>)}</>
}

export default Todoitem