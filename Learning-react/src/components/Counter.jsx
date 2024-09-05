import { useState } from "react"


const Counter = ()=>{

    let [data,changedata] = useState(1)
  
    function btnclick(){
       
        data+=1
        changedata(data)
    }

    return <>
        <span>{data}</span><br></br>
        <button onClick={btnclick}>click</button>
    </>

}

export default Counter