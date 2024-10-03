import { useState,useRef } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";

export default function Form({addButtonHandler}){

   
    
    let nameRef = useRef()
    let emailRef = useRef()
    let phoneRef = useRef()
   
   
    const AddStudent = (e)=>{
        e.preventDefault()
       
        console.log(nameRef);
        
        addButtonHandler(nameRef.current.value,emailRef.current.value,phoneRef.current.value);
        nameRef.current.value=""
        emailRef.current.value=""
        phoneRef.current.value=""
        
    }

    return <div className="row">

    <form onSubmit={AddStudent}>
        <div className="col-5 mx-auto">
        <input type="text" placeholder="Enter username" className="form-control mt-1" ref={nameRef} ></input>  
        <input type="text" placeholder="Enter Email" className="form-control mt-1" ref={emailRef}></input>
        <input type="text" placeholder="Enter Phone" className="form-control mt-1" ref={phoneRef} ></input>
        <button className="btn btn-success mt-1">Add Student</button>
        </div>
    </form>
    </div>
}

