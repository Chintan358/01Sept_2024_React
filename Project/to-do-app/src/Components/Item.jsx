

const Item = ({todoname,tododate,onDeleteButtonClick})=>{
    return <div className="container  mt-3">
    <div className="row">
    <div className="col-4">
    <span>{todoname}</span>

    </div>
    <div className="col-4">
    <span>{tododate}</span>

    </div>
    <div className="col-4">
    <span><button className="btn btn-danger" onClick={()=>onDeleteButtonClick(todoname)}>Delete</button></span>

    </div>
    
    </div>
</div>
}

export default Item