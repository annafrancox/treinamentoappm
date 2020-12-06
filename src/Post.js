import Comment from "./Comment";
import styles from "./Post.module.css";
const Post = (props) =>{
    console.log("post props", props);
    return(
        <article className={styles.post}>
            
            <header className={styles.header}>
                <img src={props.imageUrl} className={styles.avatar}/>
                <b>{props.userName}</b>
            </header>

            <img src={props.imageUrl}
                className={styles.image}/>

            <p>{props.imageDescription}</p>
            <footer className={styles.footer}>
                <Comment/>
            </footer>
        </article>
    );
}
export default Post;