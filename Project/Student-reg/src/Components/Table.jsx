import Tabledata from "./Tabledata"

const Table = ({ studentList, deleteStudent, editStudent }) => {
    return <table className="table mt-5">
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
        {studentList.map(ele => <Tabledata key={ele.name} id={ele.id} name={ele.name} email={ele.email} phone={ele.phone} deleteStudent={deleteStudent} editStudent={editStudent}></Tabledata>)}
    </table>
}

export default Table