import { useContext } from "react";
import { TodoItemListContext } from "../store/todoItemContext";


const Demo = ()=>{

        const list =   useContext(TodoItemListContext)

        return  <> <h1>Hello, functional components calling...</h1>
                {list.map(ele=><span>{ele.name}</span>)}
        </>
        
}

export default Demo;