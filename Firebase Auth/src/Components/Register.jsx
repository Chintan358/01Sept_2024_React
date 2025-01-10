import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { auth, db } from '../firestore'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from 'firebase/firestore'
const Register = () => {




    const name = useRef()
    const email = useRef()
    const password = useRef()
    const phone = useRef()

    const register = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        const user = auth.currentUser


        await setDoc(doc(db, "users", user.uid), { uname: name.current.value, phone: phone.current.value, email: email.current.value })

        window.location.href = "/reg"
    }



    return <>
        <div className="container">
            <h1 className="py-3 text-center text-primary">User Registration</h1>
            <div className="form-group card p-5">
                <form action="" onSubmit={register}>
                    <label htmlFor="">UserName</label>
                    <input type="text" className="form-control" placeholder="Enter Your UserName" ref={name} />
                    <label htmlFor="">phone</label>
                    <input type="text" className="form-control" placeholder="Enter Your Phone" ref={phone} />

                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder="Enter Your Email" ref={email} />
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" ref={password} />
                    <div>
                        <button className="btn btn-success mt-3 ">
                            Submit
                        </button>
                        <Link to={"/login"} className="mx-3">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Register