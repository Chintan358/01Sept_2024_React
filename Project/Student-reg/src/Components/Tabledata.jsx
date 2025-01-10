import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Tabledata = ({ id, name, email, phone, deleteStudent, editStudent }) => {
    return <> <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td><button className="btn btn-danger" onClick={() => deleteStudent(id)}><MdDelete /></button></td>
        <td><button className="btn btn-primary" onClick={() => editStudent(id)}><MdEdit /></button></td>

    </tr></>
}

export default Tabledata