import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteuser } from "../features/crud/crudslice"

const FormData = () => {

    const data = useSelector((state) => state.crud)
    const dispatch = useDispatch()
    const deleteHandler = (uid) => {
        dispatch(deleteuser(uid))
    }

    return <>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-5 mx-auto card p-5">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(ele =>

                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.pass}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteHandler(ele.id)}>Delete</button></td>
                                    <td></td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                    <Link to="/" className="btn btn-success">Add</Link>
                </div>
            </div></div>
    </>

}
export default FormData