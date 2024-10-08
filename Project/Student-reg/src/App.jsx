import { useEffect, useState } from "react"
import Container from "./Components/Container"
import Form from "./Components/Form"
import Abc from "./Components/Table"

const App = ()=>{


  let [studentList, setStudentList] = useState([])

  const addButtonHandler = (name,email,phone)=>{ 
     
      setStudentList((currentStudent)=>[...currentStudent,{name:name,email:email,phone:phone}])
  }

//   const addButtonHandler = (name,email,phone)=>{ 
     
//     setStudentList((currentStudent)=>{
//       let newStudnetList = [...currentStudent,{name:name,email:email,phone:phone}]
//       return newStudnetList
//     })
// }



  const deleteStudent = (name)=>{
    
    setStudentList((stlist)=>{return stlist.filter(ele=>ele.name!=name)})
  }

  return <Container>
    <h1 align='center'>Student Registration</h1>
    <Form addButtonHandler={addButtonHandler}></Form>
    <Abc studentList={studentList} deleteStudent={deleteStudent}></Abc>
  </Container>
}

export default App