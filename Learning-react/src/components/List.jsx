
function List({studentdata}){

    // let {studentdata} = props
   

    return (<><h3>Student List</h3>
        <ul>
          {studentdata.map((item)=><li key={item}>{item}</li>)}
        </ul></>)
}

export default List