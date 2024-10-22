import { useContext, useRef } from "react"
import { PostlistContext } from "../store/postlist-store"

const Createpost = ()=>{

    const idRef = useRef()
    const titleRef = useRef()
    const contentRef = useRef()


    const {addPost} = useContext(PostlistContext)

    const handleSubmit = (e)=>{
       e.preventDefault()
       addPost(idRef.current.value,titleRef.current.value,contentRef.current.value)
       e.target.reset()
    }


    return <div className="col-6 mx-auto card p-5 mt-3">
    <form onSubmit={handleSubmit}>

    <div className="mb-3">
      <label htmlFor="id" className="form-label">Post Id</label>
      <input type="text" className="form-control" id="id" aria-describedby="emailHelp" ref={idRef}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Titles</label>
      <input type="text" className="form-control" id="title" aria-describedby="emailHelp" ref={titleRef}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post content</label>
      <textarea type="text" className="form-control" id="body" ref={contentRef}/>
    </div>
   
    <button type="submit" className="btn btn-primary">Add Post</button>
  </form>
  </div>
}

export default Createpost