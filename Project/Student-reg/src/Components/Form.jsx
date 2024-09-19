import { useState } from "react";

const Form = ({addButtonHandler})=>{

    let [name,setname] = useState()
    let [email,setemail] = useState()
    let [phone,setphone] = useState()

    const nameHandler = (e)=>{
        setname(e.target.value)
    }
    const emailHandler = (e)=>{
        setemail(e.target.value)
    }

    const phoneHandler = (e)=>{
        setphone(e.target.value)
    }


    const AddStudent = ()=>{

        addButtonHandler(name,email,phone);
        setname("")
        setemail("")
        setphone("")
    }

    return <div className="row">
        <div className="col-5 mx-auto">

        
            
        <input type="text" placeholder="Enter username" className="form-control mt-1" onChange={nameHandler} value={name}></input>
        <input type="text" placeholder="Enter Email" className="form-control mt-1" onChange={emailHandler} value={email}></input>
        <input type="text" placeholder="Enter Phone" className="form-control mt-1" onChange={phoneHandler} value={phone}></input>
        <button className="btn btn-success mt-1" onClick={()=>AddStudent()}>Add Student</button>
        </div>
    </div>
}

export default Form