import Comment from "./Comment";
const Post = (props) =>{
    console.log("post props", props);
    return(
        <div style={{maxWidth: 700, border: 1, borderColor: 'black', borderStyle: 'solid', marginBottom: 10}}>
            <b>{props.userName}</b>
            <br/>
            <img src={props.imageUrl}
            style={{maxWidth:'100%', minWidth:'100%'}}/>
             <p>{props.imageDescription}</p>
             <Comment/>
        </div>
    );
}
export default Post;