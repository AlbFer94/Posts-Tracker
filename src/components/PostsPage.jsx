import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function PostsPage() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    title: "",
    body: ""
  });

  useEffect(loadPost, []);

  function loadPost() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setPostData({
      ...postData,
      [fieldName]: fieldValue
    });
  }

  function addPost(event) {
    event.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    };

    fetch(url, config)
      .then(response => {
        if (!response.ok) {
          throw new Error("chiamata non ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Post aggiunto: ", data);
        setPost(prevPosts => [data, ...prevPosts]);
        setPostData({
          name: "",
          title: "",
          body: ""
        });
      })
      .catch(error => {
        console.error("qualcosa è andato storto", error);
      });
  }

  return (
    <div>
      <h1>Community's Posts</h1>
      <div className="container">
        {post.map(element =>
          <PostCard
            key={element.id}
            name={element.userId || element.name}
            title={element.title}
            body={element.body}
          />
        )}
      </div>

      {/* section for new post */}
      <form className="new-post-form" onSubmit={addPost}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input onChange={handleChange} type="text" id="name" name="name" placeholder="Inserisci il tuo nome" value={postData.name} />
        </div>

        <div>
          <label htmlFor="title">Titolo:</label>
          <input onChange={handleChange} type="text" id="title" name="title" placeholder="Inserisci il titolo del post" value={postData.title} />
        </div>

        <div>
          <label htmlFor="body">Body:</label>
          <textarea onChange={handleChange} id="body" name="body" rows="4" placeholder="Scrivi il contenuto del post..." value={postData.body}></textarea>
        </div>

        <button type="submit">Aggiungi Post</button>
      </form>
    </div>
  );
}

export default PostsPage;
