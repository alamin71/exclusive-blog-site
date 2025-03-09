import React, { useEffect, useState } from "react";

const BlogList = ({ selectedCategory, setSelectedBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  // filter bolgs
  const filteredBlogs = blogs.filter((blog) =>
    selectedCategory === "ALL" || !selectedCategory
      ? true
      : blog.category_name === selectedCategory
  );

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  return (
    <div className="mt-4">
      <span className="w-full p-2 mb-5 mx-auto bg-blue-600 text-white rounded hover:bg-blue-700">
        Blogs List by {selectedCategory}
      </span>
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <div key={blog.id} className="mb-4 p-4 border rounded-lg shadow">
            <img
              className="w-full h-32 object-cover rounded"
              src={blog.cover}
              alt={blog.title}
            />
            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
            <button
              onClick={() => setSelectedBlog(blog)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Blog
            </button>
          </div>
        ))
      ) : (
        <p>No blogs found for this category.</p>
      )}
    </div>
  );
};

export default BlogList;
