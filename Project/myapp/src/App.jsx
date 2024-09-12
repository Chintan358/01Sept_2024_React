import { useState } from "react"
import FoodItem from "./Components/FoodItem"
import InputItem from "./Components/InputItem"
import Title from "./Components/Title"
import ErrorMessage from "./Components/ErrorMessage"

import Container from "./Components/Container"

const App = ()=>{

    let [items, setItems] = useState([])

    const InputHandler = (e)=>{
      if(e.key==='Enter')
      {
         let NewElement = e.target.value
         let newItemList = [...items,NewElement]
         setItems(newItemList)


      }
      
    }

    return <><Container>
      <Title></Title>
      <InputItem InputHandler={InputHandler}></InputItem>
      <ErrorMessage items={items}></ErrorMessage>
      <FoodItem items={items}></FoodItem>
    </Container>

   </>
}


export default App