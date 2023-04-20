import Post from "./Post.jsx";
import classes from "./Posts-list.css"

function PostsList() {
    return(
        <ul className='posts'>
            <Post name="Mykola" text="React Course" />
            <Post name="Rostyslav" text="Write More" />
        </ul>
    )
}

export default PostsList;
