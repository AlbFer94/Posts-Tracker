import { useState } from "react";
import PostCard from "./components/PostCard";

function App() {

  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    title: "",
    body: ""
  });

  let newArray;

  function loadPost() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        newArray = data.filter(element => element.userId === 1);
        setPost(newArray);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newObject = {
      ...postData,
    }

    newObject[fieldName] = fieldValue;

    setPostData(newObject);
    console.log(postData);

  }

  return (
    <div>
      <h1>Community's Posts</h1>
      <button onClick={loadPost}>Load Posts</button>
      <div className="container">
        {post.map(element =>
          <PostCard
            key={element.id}
            name={element.userId}
            title={element.title}
            body={element.body}
          />
        )}

      </div>
      {/* section for new post */}
      <form className="new-post-form" onChange={handleChange}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome" value={postData.name} />
        </div>

        <div>
          <label htmlFor="title">Titolo:</label>
          <input type="text" id="title" name="title" placeholder="Inserisci il titolo del post" value={postData.title} />
        </div>

        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" name="body" rows="4" placeholder="Scrivi il contenuto del post..." value={postData.body}></textarea>
        </div>

        <button type="submit">Aggiungi Post</button>
      </form>
    </div>
  );
}

export default App;