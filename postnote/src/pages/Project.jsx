import React, { useState, useEffect } from "react";

export default function AddPost() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleAddOrUpdate = () => {
    if (title.trim() === "" || content.trim() === "") return;

    const newPost = { title, content };

    if (editingIndex !== null) {
      const updated = [...posts];
      updated[editingIndex] = newPost;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      setPosts([...posts, newPost]);
    }

    setTitle("");
    setContent("");
    setShowForm(false);
  };

  const handleEdit = (index) => {
    const post = posts[index];
    setTitle(post.title);
    setContent(post.content);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = posts.filter((_, i) => i !== index);
    setPosts(updated);
    if (editingIndex === index) {
      setTitle("");
      setContent("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-4xl font-bold text-blue-700">📝 Add Post</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-4 md:mt-0">
            <p className="text-gray-600">Total Posts: <span className="font-bold text-gray-800">{posts.length}</span></p>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setTitle("");
                setContent("");
                setEditingIndex(null);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all"
            >
              {showForm ? "Cancel" : "➕ Add Post"}
            </button>
          </div>
        </div>

        {showForm && (
          <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8 space-y-4">
            <input
              type="text"
              placeholder="Enter post title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Write your post content..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              onClick={handleAddOrUpdate}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all"
            >
              {editingIndex !== null ? "Update Post" : "Publish Post"}
            </button>
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">No posts yet. Click "Add Post" to get started. ✍️</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm transition hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-xl"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
