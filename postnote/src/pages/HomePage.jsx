import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Welcome to CloudNote 📝
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          A simple and beautiful CloudNote.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Add a Post</h2>
            <p className="text-gray-600 mb-4">
              Create and share your thoughts with the world in seconds.
            </p>
            <Link
              to="/project"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Go to Add
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-2">View Posts</h2>
            <p className="text-gray-600 mb-4">
              See all posts created by users in a neat layout.
            </p>
            <Link
              to="/project"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              View Posts
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-red-700 mb-2">Edit/Delete</h2>
            <p className="text-gray-600 mb-4">
              Easily update or remove your notes at any time.
            </p>
            <Link
              to="/project"
              className="inline-block px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
            >
              Manage Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
