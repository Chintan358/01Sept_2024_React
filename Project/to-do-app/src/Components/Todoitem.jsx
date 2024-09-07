import Item from "./Item"
import style from "./Todoitem.module.css"

const Todoitem = ({todoitemlist})=>{

    return <>{todoitemlist.map((item)=><Item todoname={item.name} tododate={item.date}></Item>)}</>
}

export default Todoitem