import { createContext, useEffect, useReducer } from "react";
import Details from "../Components/Details";

export const ProductListcontext = createContext()

const ProductReducer = (currentState, action)=>{
    if(action.type=="INIT_PROD")
    {
        return currentState = action.payload.products
    }
}

const ProductListContextProvider = ({children})=>{


    

    const [productLists, ProductListDispatcher] = useReducer(ProductReducer,[]) 

    const setInitalProducts = (products)=>{
        
        const initProducts = {
            type : "INIT_PROD",
            payload : {products}
        }

        ProductListDispatcher(initProducts)
    }

    return <ProductListcontext.Provider value={{productLists,setInitalProducts}}>
        {children}
        
    </ProductListcontext.Provider>
}

export default ProductListContextProvider