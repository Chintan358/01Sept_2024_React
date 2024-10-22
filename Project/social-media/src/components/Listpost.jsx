import { useContext } from "react"
import Posts from "./Posts"
import { PostlistContext } from "../store/postlist-store"

const Listpost = ()=>{

        const {postlist} = useContext(PostlistContext)

        return <>
        {postlist.map(post=><Posts key={post.id} post={post}></Posts>)}
        
        </>
}

export default Listpost