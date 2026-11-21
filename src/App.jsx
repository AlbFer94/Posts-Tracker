import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import HomePage from "./components/HomePage";
import About from "./components/About";
import PostsPage from "./components/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <header className="main-nav">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">Chi Siamo</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
