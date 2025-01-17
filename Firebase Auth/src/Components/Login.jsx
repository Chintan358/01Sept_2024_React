import { useRef } from "react"
import { Link } from "react-router-dom"
import { auth, googleprovider } from '../firestore'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import GoogleButton from 'react-google-button'

const Login = () => {

    const email = useRef()
    const pass = useRef()

    const login = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
            const user = auth.currentUser
            window.location.href = "/home"
        } catch (error) {
            console.log("Invalid credentials");

        }
    }

    const loginwithgoogle = async () => {

        const result = await signInWithPopup(auth, googleprovider)




    }


    return <>
        <div className="container">
            <h1 className="text-center text-primary py-3">User Login</h1>
            <div className="form-group card p-5">
                <form action="" onSubmit={login}>
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" ref={email} placeholder="Enter Email" />
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" ref={pass} placeholder="Enter Password" />
                    <div>
                        <button className="btn btn-success mt-3">
                            Log In
                        </button>
                        <br />
                        <br />
                        <GoogleButton
                            onClick={loginwithgoogle}
                        />
                        <Link to={"/reg"} className="mx-3">Don't Have Account</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login