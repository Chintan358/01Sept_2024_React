import { getDatabase, set, ref } from 'firebase/database'

// import { app } from './firebase'

// const database = getDatabase(app);


import { db } from './firebase-config'

import { collection, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'



const App = () => {


  // const addUser = () => {

  //   set(ref(database, 'tops/users'), {
  //     name: "Madhav",
  //     email: "madhav@gmial.com",
  //     age: 25
  //   })

  // }

  useEffect(() => {
    viewUser()
  }, [])

  const userDbRef = collection(db, "student")
  const addUser = () => {

    addDoc(userDbRef, { "username": "moksh", "email": "moksh@gmial.com", age: "25" })

  }

  const viewUser = async () => {

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

  }

  return <button onClick={addUser}>Click me</button>
}


export default App