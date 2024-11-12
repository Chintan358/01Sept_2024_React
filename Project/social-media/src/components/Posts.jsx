import { MdDelete } from "react-icons/md";
const Posts = ({post})=>{

    
    
    return <div className="card card-container" style={{width: "30rem"}}>
      
    <div className="card-body">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete />
   
  </span>
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map(ele=><span className="badge text-bg-primary m-1">{ele}</span>)}
      
      
    </div>
  </div>
}

export default Posts