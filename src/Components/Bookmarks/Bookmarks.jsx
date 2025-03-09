import React from "react";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime, setSelectedBlog }) => {
  return (
    <>
      <div className="w-full md:w-3/12 ">
        <div className="border p-2 mb-2">
          Spend Time or read: {readingTime} min{" "}
        </div>
        <div className="bg-gray-400 p-2 ">
          Bookmarks Blogs: {bookmarks.length}
          {bookmarks.map((bookmark, idx) => (
            <Bookmark
              key={idx}
              bookmark={bookmark}
              setSelectedBlog={setSelectedBlog}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
