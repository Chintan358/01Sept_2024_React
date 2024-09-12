

const ErrorMessage = ({items})=>{

    return <div>{items.length===0 ? <h3>I am Still hungry</h3> : null}</div>
}

export default ErrorMessage