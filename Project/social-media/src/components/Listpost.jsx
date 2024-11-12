import { useContext, useEffect, useState } from "react"
import Posts from "./Posts"
import { PostlistContext } from "../store/postlist-store"
import WelcomeMessage from "./WelcomeMessage"
import Loading from "./Loading"

const Listpost = ()=>{

        const {postlist,initPost} = useContext(PostlistContext)
        const [loading, setloading] = useState(false)
        const fetchPostsData = ()=>{
               
        }

        useEffect(()=>{
                setloading(true)
                fetch("https://dummyjson.com/posts").then(result=>{
                                        return result.json()
                        }).then(data=>{
                                        initPost(data.posts);
                                        setloading(false)
                                }).catch(err=>{
                                        console.log(err);
                                        
                })
        },[])


        return <>
        {loading && <Loading></Loading>}
        {!loading && postlist.length===0 && <WelcomeMessage ></WelcomeMessage>}
        {!loading && postlist.map(post=><Posts key={post.id} post={post}></Posts>)}
        
        </>
}

export default Listpost