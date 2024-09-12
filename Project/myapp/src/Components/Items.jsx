import styles from './Items.module.css'

const Items = ({itemname,bought,buybuttonHandler,removebuttonHandler})=>{
    return <li className={`list-group-item ${bought?'active':''}` }>{itemname}{bought?<button className={`btn btn-danger ${styles.bbutton}`} onClick={()=>removebuttonHandler(itemname)}>Remove</button>:<button className={`btn btn-primary ${styles.bbutton}`} onClick={()=>buybuttonHandler(itemname)}>Buy</button>}</li>
}

export default Items