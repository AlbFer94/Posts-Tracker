import { useState } from "react";
import PostForm from "./components/PostForm";
function App() {

  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);

  function loadPost() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }

  return (
    <div>
      <h1>Community's Posts</h1>
      <button onClick={loadPost}>Load Posts</button>
      <div className="container">
        {post.map(element =>
          <PostForm
            key={element.id}
            name={element.userId}
            title={element.title}
            body={element.body}
          />
        )}

      </div>
    </div>
  );
}

export default App;