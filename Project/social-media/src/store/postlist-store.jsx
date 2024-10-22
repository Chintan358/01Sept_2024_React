import { createContext, useReducer } from "react";

export const PostlistContext =  createContext([])

const postlistReducer = (postlist,action)=>{

        if(action.type=="ADD_POST"){
            return [...postlist,action.payload]
        }
}

const PostlistContextProvider = ({children})=>{

    const [postlist,postlistDispathcer] = useReducer(postlistReducer,[])

    const addPost = (id,title,content)=>{
        
        const addpostdata = {
            type : "ADD_POST",
            payload : {
                id:id,
                title:title,
                content:content,
                likes : "0",
                comments : "0",
            }
        }

        postlistDispathcer(addpostdata)
        
    }

    const deletePost = ()=>{

    }

    return <PostlistContext.Provider value={{postlist,addPost,deletePost}}>
        {children}
    </PostlistContext.Provider>
}



export default PostlistContextProvider