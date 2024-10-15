import { useContext } from "react"
import { useRef } from "react"
import { TodoliststoreContext } from "../store/todolist-store"


const UserForm = ()=>{


    const {addUserHandler} = useContext(TodoliststoreContext)

    let nameRef = useRef()
    let emailRef = useRef()
    let pwdRef = useRef()

    const addUser = (e)=>{
        e.preventDefault()
       
        
        addUserHandler(nameRef.current.value,emailRef.current.value,pwdRef.current.value)
        nameRef.current.value=""
        emailRef.current.value=""
        pwdRef.current.value=""
    }



    return <>
    <div className="col-4">
        <form onSubmit={addUser}>
          <div className="form-group">
          <label for="uname">Username:</label>
          <input type="text" id="uname" name="uname" required  className="form-control" ref={nameRef}/>
          </div>
          <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required  className="form-control" ref={emailRef}/>
          </div>
          <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" id="pwd" name="pwd" required className="form-control" ref={pwdRef} />
          </div>
          <br />
          <button type="submit" className="btn btn-success" >Submit</button>
        </form>
      </div>
    </>
}

export default UserForm