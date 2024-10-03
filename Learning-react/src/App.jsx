import Title from "./components/Title"
import List from "./components/List"
import Details from "./components/Details"
import React, { useState } from 'react'
import Counter from "./components/Counter"
import Input  from "./components/Input"
import Demo from "./components/Demo"
function App()
{

    // const stdata = ["Moksh","Mohini"]

    let [stdata,setstdata] = useState([])

    function keyPressHandle(e){
        if(e.key=='Enter')
        {
          const newStudent = e.target.value;
          const newarr = [...stdata,newStudent]
          setstdata(newarr)
        }
        
    }


   return <>
            <Title></Title>
            <Input keyhandle={keyPressHandle}></Input>
            <List studentdata={stdata}></List>
            <Details></Details>
            <Counter></Counter>
            <Demo ></Demo>
          </>
        
  

}


export default App