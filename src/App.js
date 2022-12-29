import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './layouts/Layout';
import Album from "./pages/Album";
import Comment from "./pages/Comment";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Post from "./pages/Post";
import Todo from "./pages/Todo";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/comment" element={<Comment/>} />
          <Route path="/album" element={<Album />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
