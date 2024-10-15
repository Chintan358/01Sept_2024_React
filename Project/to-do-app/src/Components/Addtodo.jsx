import { useContext, useState } from 'react'
import style from './Addtodo.module.css'
import { TodoItemListContext } from '../store/todoItemContext'


const Addtodo = ()=>{

    const {addItemHandler} =  useContext(TodoItemListContext)

    let [name, setname] = useState("")
    let [date,setdate] = useState("")

    const nameChangeHandler = (e)=>{
        setname(e.target.value);  
    }

    const dateChangeHandler = (e)=>{
        setdate(e.target.value)
    }

    const onAddButtonclick = ()=>{
        addItemHandler(name,date)
        setname("")
        setdate("")
        
    }



    return <div className='container  mt-3'>
        <div className='row'>
            <div className='col-4'> 
        <input type="text" placeholder="Enter your task" className='form-control' onChange={nameChangeHandler} value={name}></input>
        </div>
        <div className='col-4'> 
        <input type="date"  className='form-control' onChange={dateChangeHandler} value={date}/>
        </div>

        <div className='col-4'> 
        <button className="btn btn-primary" onClick={onAddButtonclick}>Add</button>
        </div>
        </div>
    </div>
}

export default Addtodo