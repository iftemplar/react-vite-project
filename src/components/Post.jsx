const names = ['Mykola', 'Rostyslav'];
function Post() {
    const theName = Math.random() > 0.5 ? names[0] : names[1];
    return(
        <div>
            <p>{theName}</p>
            <p>React Course</p>
        </div>
    )
}

export default Post;
