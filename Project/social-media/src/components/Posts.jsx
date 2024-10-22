import { MdDelete } from "react-icons/md";
const Posts = ({post})=>{

    return <div className="card card-container" style={{width: "30rem"}}>
      
    <div className="card-body">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete />
   
  </span>
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.content}</p>
      <span class="badge text-bg-primary">Likes {post.likes}</span>
      <span class="badge text-bg-success m-2">Comments {post.comments}</span>
    </div>
  </div>
}

export default Posts