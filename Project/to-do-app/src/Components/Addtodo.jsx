import { useState } from 'react'
import style from './Addtodo.module.css'


const Addtodo = ({onbuttonclick})=>{

    let [name, setname] = useState("")
    let [date,setdate] = useState("")

    const nameChangeHandler = (e)=>{
        setname(e.target.value);  
    }

    const dateChangeHandler = (e)=>{
        setdate(e.target.value)
    }

    const onAddButtonclick = ()=>{
        onbuttonclick(name,date)
        setname("")
        setdate("")
        
    }



    return <div className='container  mt-3'>
        <div className='row'>
            <div className='col-4'> 
        <input type="text" placeholder="Enter your task" className='form-control' onChange={nameChangeHandler}></input>
        </div>
        <div className='col-4'> 
        <input type="date"  className='form-control' onChange={dateChangeHandler}/>
        </div>

        <div className='col-4'> 
        <button className="btn btn-primary" onClick={onAddButtonclick}>Add</button>
        </div>
        </div>
    </div>
}

export default Addtodo