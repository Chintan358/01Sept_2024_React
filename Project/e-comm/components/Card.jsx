
const Card = ({products})=>{
    return <div className="col">
    <div className="card shadow-sm">
        
       <img src={products.images} alt=""  className="bd-placeholder-img card-img-top" width="100%" height="225" /> 
      
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
}

export default Card