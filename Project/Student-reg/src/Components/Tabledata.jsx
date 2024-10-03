import { MdDelete } from "react-icons/md";

const Tabledata = ({name,email,phone,deleteStudent})=>{
    return <> <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td><button className="btn btn-danger" onClick={()=>deleteStudent(name)}><MdDelete /></button></td>
</tr></>
}

export default Tabledata