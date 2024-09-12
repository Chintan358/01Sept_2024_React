import Item from "./Item"
import style from "./Todoitem.module.css"

const Todoitem = ({todoitemlist, onDeleteButtonClick})=>{

    return <>{todoitemlist.map((item)=><Item key={item.name} todoname={item.name} tododate={item.date} onDeleteButtonClick={onDeleteButtonClick}></Item>)}</>
}

export default Todoitem