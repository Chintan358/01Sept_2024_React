import styles from './Container.module.css'

const Container = (prop)=>{
    return <div className={styles.todo}>{prop.children}</div>
}

export default Container