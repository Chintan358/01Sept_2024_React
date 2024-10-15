import { useContext } from "react"
import List from "./List"
import { TodoliststoreContext } from "../store/todolist-store"

const UserList  = ({removehandler})=>{

    const {userlist} = useContext(TodoliststoreContext)

    return <><div className="col-8">
    <table className="table">
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Action</th>
      </tr>

      {userlist.map((ele)=><List name={ele.name} email={ele.email} removehandler={removehandler}></List>)}
      {/* Add User Data Here */}
    </table>
</div>
    </>
}

export default UserList