import React, { useEffect, useState, useRef } from "react";
import BlogDetails from "./BlogDetails";

const Blogs = ({ selectedBlog, handleAddBookmark, handleMarksAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  const blogDetailRef = useRef(null);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // show blog
  useEffect(() => {
    if (selectedBlog && blogDetailRef.current) {
      setTimeout(() => {
        // show blog before scroll and show blog then scroll
        blogDetailRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  }, [selectedBlog]);

  return (
    <div className="w-full md:w-6/12 p-4">
      {/* selectedBlog show when select blog  */}
      {selectedBlog ? (
        <div ref={blogDetailRef}>
          <BlogDetails
            key={selectedBlog.id}
            blogImpot={selectedBlog}
            handleAddBookmark={handleAddBookmark}
            handleMarksAsRead={handleMarksAsRead}
          />
        </div>
      ) : (
        // selectedBlog  when not select bolg , show all blog
        blogs.map((blog) => (
          <BlogDetails
            key={blog.id}
            blogImpot={blog}
            handleAddBookmark={handleAddBookmark}
            handleMarksAsRead={handleMarksAsRead}
          />
        ))
      )}
    </div>
  );
};

export default Blogs;
