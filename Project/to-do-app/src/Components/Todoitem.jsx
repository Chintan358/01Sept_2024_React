import { useContext } from "react"
import { TodoItemListContext } from "../store/todoItemContext"
import Item from "./Item"
import style from "./Todoitem.module.css"

const Todoitem = ({onDeleteButtonClick})=>{

     const  todoitemlist =  useContext(TodoItemListContext)

    return <>{todoitemlist.map((item)=><Item key={item.name} todoname={item.name} tododate={item.date} onDeleteButtonClick={onDeleteButtonClick}></Item>)}</>
}

export default Todoitem