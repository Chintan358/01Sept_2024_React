import { useEffect, useState } from "react"
import Container from "./Components/Container"
import Form from "./Components/Form"
import Abc from "./Components/Table"
import { db } from './firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import Loading from "./Components/Loading"
const App = () => {

  const studentRefCollection = collection(db, "students")

  let [studentList, setStudentList] = useState([])
  let [student, setStudent] = useState({})
  let [loading, setLoading] = useState(false)

  const addButtonHandler = async (id, name, email, phone) => {

    if (id) {

      await updateDoc(doc(db, "students", id), { name: name, email: email, phone: phone })
      setStudent({})
    } else {

      addDoc(studentRefCollection, { name: name, email: email, phone: phone })

    }
    getData()
  }

  const getData = async () => {
    setStudentList([])
    setLoading(true)
    const studentdata = await getDocs(studentRefCollection)
    studentdata.forEach((doc) => {
      setStudentList((currentStudent) => [...currentStudent, { id: doc.id, name: doc.data().name, email: doc.data().email, phone: doc.data().phone }])
      setLoading(false)
    })

  }

  useEffect(() => {
    getData()
  }, [])
  const deleteStudent = async (id) => {

    await deleteDoc(doc(db, "students", id));
    getData()
    // setStudentList((stlist) => { return stlist.filter(ele => ele.name != name) })
  }

  const editStudent = async (id) => {

    const snapdata = await getDoc(doc(db, "students", id))
    setStudent({ id: snapdata.id, name: snapdata.data().name, email: snapdata.data().email, phone: snapdata.data().phone })

  }

  return <Container>
    <h1 align='center'>Student Registration</h1>
    <Form addButtonHandler={addButtonHandler} student={student}></Form>
    {loading ? <Loading></Loading> :
      <Abc studentList={studentList} deleteStudent={deleteStudent} editStudent={editStudent}></Abc>
    }
  </Container>
}

export default App