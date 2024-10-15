import { useContext } from "react"
import { TodoliststoreContext } from "../store/todolist-store"


const List = ({name,email})=>{

    const {removehandler} = useContext(TodoliststoreContext)

    return <>
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td><button className="btn btn-danger" onClick={()=>removehandler(name)}>Delete</button></td>
      </tr>
    </>
}

export default List