function PostCard(props) {
    const name = props.name;
    const title = props.title;
    const body = props.body;

    return (
        <div className="posts-container">
            <h2>{name}</h2>
            <span>{title}</span>
            <p>{body}</p>
        </div>
    )
}

export default PostCard;