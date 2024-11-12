import { createContext, useReducer } from "react";

export const PostlistContext =  createContext([])

const postlistReducer = (postlist,action)=>{

        if(action.type=="ADD_POST"){
            return [...postlist,action.payload]
        }
        else if(action.type=="INIT_POST")
        {
            return postlist = action.payload.posts
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

    const initPost = (posts)=>{
        const initPstdata = {
            type : "INIT_POST",
            payload : {posts}
        }
        postlistDispathcer(initPstdata)
    }

    return <PostlistContext.Provider value={{postlist,addPost,deletePost,initPost}}>
        {children}
    </PostlistContext.Provider>
}



export default PostlistContextProvider