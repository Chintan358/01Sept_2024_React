

const Item = ({todoname,tododate})=>{
    return <div className="container  mt-3">
    <div className="row">
    <div className="col-4">
    <span>{todoname}</span>

    </div>
    <div className="col-4">
    <span>{tododate}</span>

    </div>
    <div className="col-4">
    <span><button className="btn btn-danger">Delete</button></span>

    </div>
    
    </div>
</div>
}

export default Item