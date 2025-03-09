import React, { useEffect, useState, useRef } from "react";
import BlogDetails from "../Blogs/BlogDetails";

const BlogList = ({ selectedCategory, setSelectedBlog, selectedBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const blogDetailRef = useRef(null);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  // Filter blogs by selected category
  const filteredBlogs = blogs.filter((blog) =>
    selectedCategory === "ALL" || !selectedCategory
      ? true
      : blog.category_name === selectedCategory
  );

  // Handle when a blog is clicked
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  // Scroll to BlogDetails only when selectedBlog changes
  useEffect(() => {
    if (selectedBlog && blogDetailRef.current) {
      setTimeout(() => {
        blogDetailRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedBlog]);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  return (
    <div className="mt-4">
      <div className="w-full p-2 mb-5 mx-auto bg-blue-600 text-white rounded hover:bg-blue-700 text-center">
        Blogs List by {selectedCategory}
      </div>

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
              onClick={() => handleBlogClick(blog)}
              className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Blog
            </button>
          </div>
        ))
      ) : (
        <p>No blogs found for this category.</p>
      )}

      {/* BlogDetails will only be rendered when selectedBlog is available */}
      <div className="max-h-96  overflow-auto">
        {selectedBlog && (
          <BlogDetails
            ref={blogDetailRef}
            blogImpot={selectedBlog}
            handleAddBookmark={() => {}}
            handleMarksAsRead={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default BlogList;
