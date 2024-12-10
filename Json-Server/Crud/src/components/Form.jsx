import { useEffect, useRef, useState } from "react"
import UserData from "./UserData"

const Form = () => {

    const userid = useRef()
    const username = useRef()
    const email = useRef()
    const phone = useRef()
    const password = useRef()
    const addUser = (e) => {
        e.preventDefault()
        if (userid.current.value === "") {
            fetch("http://localhost:3000/users", {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username.current.value,
                    "email": email.current.value,
                    "phone": phone.current.value,
                    "password": password.current.value,
                })
            })
        }
        else {

            fetch(`http://localhost:3000/users/${userid.current.value}`, {
                method: "put",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username.current.value,
                    "email": email.current.value,
                    "phone": phone.current.value,
                    "password": password.current.value,
                })
            })


        }

        userid.current.value = ""
        username.current.value = ""
        email.current.value = ""
        phone.current.value = ""
        password.current.value = ""
    }


    const [users, setUsers] = useState([])
    const [cuser, setcuser] = useState({})
    useEffect(() => {
        fetch("http://localhost:3000/users").then(resp => {
            return resp.json()
        }).then(result => {
            setUsers(result)
        })
    }, [addUser])


    const updateUser = (id) => {
        fetch(`http://localhost:3000/users/${id}`).then(resp => {
            return resp.json()
        }).then(result => {
            // setcuser(result)
            userid.current.value = result.id
            username.current.value = result.username
            email.current.value = result.email
            phone.current.value = result.phone
            password.current.value = result.password
        })
    }




    return <div className="container">
        <div className="row">
            <div className="col-4 mx-auto mt-3 card p-3">
                <h1 align="center">User Registration</h1>
                <hr />
                <form action="" onSubmit={addUser}>
                    <input type="hidden" ref={userid} name="" id="" />
                    <div className="form-group">
                        <label htmlFor="uname">Username</label>
                        <input type="text" id="uname" ref={username} name="uname" className="form-control" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" ref={email} name="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="text" id="pass" name="pass" ref={password} className="form-control" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" ref={phone} className="form-control" placeholder="Enter Phone" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
            <div className="col-1"></div>
            <div className="col-7 card mt-3 p-3">
                <h1 align="center">User Details</h1>
                <hr />
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {users.map((ele) => <UserData key={ele.id} users={ele} updateUser={updateUser}></UserData>)}
                </table>
            </div>
        </div>
    </div>
}

export default Form