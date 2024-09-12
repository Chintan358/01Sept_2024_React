import { useState } from "react"
import Items from "./Items"


const FoodItem = ({items})=>{

    let [boughtItem,setboughtItem] = useState([])

    const buybuttonHandler = (name)=>{
           
        const newItemList = [...boughtItem,name]
        setboughtItem(newItemList)
            
    }

    const removebuttonHandler = (name)=>{
        const newItemList = boughtItem.filter(ele=>ele!=name)
        setboughtItem(newItemList)
    }
    

    return  <ul className={`list-group mt-3`}>{items.map(element=><Items key={element} itemname={element} bought={boughtItem.includes(element)} buybuttonHandler={buybuttonHandler} removebuttonHandler={removebuttonHandler}></Items>)}</ul>
}

export default FoodItem