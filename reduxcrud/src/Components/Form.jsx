import { useRef } from "react"
import { Link } from "react-router-dom"
import { users } from "../data"
import { useDispatch, useSelector } from "react-redux"
import { adduser } from "../features/crud/crudslice"

const Form = () => {


    const data = useSelector((state) => state.crud)

    const dispatch = useDispatch()

    const name = useRef()
    const email = useRef()
    const password = useRef()

    const addUserHandler = (e) => {
        e.preventDefault()
        dispatch(adduser({ "id": data.length + 1, "username": name.current.value, "email": email.current.value, "pass": password.current.value }))
    }

    return <>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-5 mx-auto card p-5">
                    <form onSubmit={addUserHandler}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" ref={name} placeholder="" />
                            <label>Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" ref={email} placeholder="" />
                            <label>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" ref={password} placeholder="" />
                            <label>Password</label>
                        </div>
                        <div className="mt-4">
                            <button className="btn btn-success">
                                Submit
                            </button>
                            <Link to="/display" className="btn btn-warning mx-2">View Users</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Form