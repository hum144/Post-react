import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, createPost, deletePost } from "./redux/postsSlice";

import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const [filter, setFilter] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  useEffect(() => {
    // Actualiza los posts filtrados cada vez que cambien 'posts' o 'filter'
    const updatedFilteredPosts = posts.filter((post) =>
      (post?.name || "").toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPosts(updatedFilteredPosts);
  }, [posts, filter]);


  const handleCreate = (newPost) => {
    dispatch(createPost(newPost));
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Administración de Posts</h1>

        <div className="space-y-4">
          <PostForm onCreate={handleCreate} />
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>

        <PostList posts={filteredPosts} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;