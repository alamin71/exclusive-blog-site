import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ selectedBlog, handleAddBookmark, handleMarksAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full md:w-6/12 p-4">
      {/* যদি selectedBlog থাকে, তাহলে শুধুমাত্র সেই ব্লগটি দেখাবে */}
      {selectedBlog ? (
        <Blog
          key={selectedBlog.id}
          blogImpot={selectedBlog}
          handleAddBookmark={handleAddBookmark}
          handleMarksAsRead={handleMarksAsRead}
        />
      ) : (
        // selectedBlog না থাকলে সব ব্লগ দেখাবে
        blogs.map((blog) => (
          <Blog
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
