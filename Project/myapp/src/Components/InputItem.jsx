
import styles from './InputItem.module.css'

const InputItem = ({InputHandler})=>{

    return <input type="text" placeholder="Enter Item Name..." className={styles.input} onKeyUp={InputHandler}></input>
}

export default InputItem