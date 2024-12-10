
import { useContext, useEffect } from "react"
import Featured from "./Featured"
import ProductList from "./ProductList"
import { ProductListcontext } from "../store/ProductList-store"

const Products = ()=>{

    const {setInitalProducts,productLists} = useContext(ProductListcontext)

    useEffect(()=>{

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(result=>{
            setInitalProducts(result.products);
            
        });

    },[])

    
    


    return <><Featured></Featured> 
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
        {productLists.map(ele=> <ProductList key={ele.id} products={ele}></ProductList>)}
    
    </div>
</div>
</>
}

export default Products