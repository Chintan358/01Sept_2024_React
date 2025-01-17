import { useRef } from "react"
import { Link } from "react-router-dom"

const Registration = () => {

    const uname = useRef()
    const email = useRef()
    const phone = useRef()
    const pass = useRef()

    const addUser = (e) => {
        e.preventDefault()
         
        // console.log(uname.current.value);

    }

    return <>
        <>
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">User Registration</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><Link to="/">Home</Link></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0"><Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">

                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5 mx-auto">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form onSubmit={addUser}>
                                <div className="control-group">
                                    <input type="text" className="form-control" id="name" ref={uname} placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" id="email" ref={email} placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="control-group">
                                    <input type="text" className="form-control" id="phone" ref={phone} placeholder="Your Phone" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="control-group">
                                    <input type="password" className="form-control" id="pass" ref={pass} placeholder="Your Password"
                                        required="required" data-validation-required-message="Please enter your password" />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="control-group">
                                    <input type="password" className="form-control" id="cpass" placeholder="Your confirm password"
                                        required="required" data-validation-required-message="Please enter your confim password" />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div>
                                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    </>
}

export default Registration