import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import PostCard from "./PostCard";

function PostDetailPage() {
    const [post, setPost] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(loadPost, []);

    function loadPost() {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) { throw new Error("Chiamata non ok"); }
                return response.json();
            })
            .then((data) => {
                setPost(data);
            })
            .catch(error => {
                console.error("qualcosa è andato storto");
                navigate("/posts");
            });
    }

    return (
        <div>
            <h1>Dettagli del Post con id: {id}</h1>
            <div className="container">
                <PostCard
                    name={post.id || post.name}
                    title={post.title}
                    body={post.body}
                />
            </div>
        </div>
    );
}

export default PostDetailPage;