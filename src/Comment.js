import styles from './Comment.module.css';

const Comment = () => {
    return (
        <div className={styles.comment}>
            <input className={styles.input} type={"text"} placeholder="Comentar Agora"/>
            <button className={styles.button}>Enviar</button>
        </div>
    )
}
export default Comment;