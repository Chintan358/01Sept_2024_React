import { useEffect, useState } from "react"
import Container from "./Components/Container"
import Form from "./Components/Form"
import Table from "./Components/Table"

const App = ()=>{


  let [studentList, setStudentList] = useState([])

  const addButtonHandler = (name,email,phone)=>{

   
      let newStudnetList = [...studentList,{name:name,email:email,phone:phone}]
      setStudentList(newStudnetList)
    
    

  }

  return <Container>
    <h1 align='center'>Student Registration</h1>
    <Form addButtonHandler={addButtonHandler}></Form>
    <Table studentList={studentList}></Table>
  </Container>
}

export default App