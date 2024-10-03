import Tabledata from "./Tabledata"

const Table = ({studentList,deleteStudent})=>{
    return <table className="table mt-5">
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
       {studentList.map(ele=><Tabledata key={ele.name} name={ele.name} email={ele.email} phone={ele.phone} deleteStudent={deleteStudent}></Tabledata>)}
    </table>
}

export default Table