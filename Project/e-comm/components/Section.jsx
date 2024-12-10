import { useEffect, useState } from "react"
import Card from "./Card"

const Section = ()=> {

    Ś
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(result=>{
            return result.json()
        }).then(data=>{
           setproducts(data.products);      
        })
    },[])

    
    

    return <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {products.map(ele=><Card key={ele.id} products={ele}></Card>)}
      </div>
    </div>
  </div>
}

export default Section