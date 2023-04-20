import classes from './Post.module.css';

function Post(props) {
    return(
        <div className={classes.post}>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.text}>{props.text}</p>
        </div>
    )
}

export default Post;
