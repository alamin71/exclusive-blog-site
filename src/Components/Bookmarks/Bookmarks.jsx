import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime, setSelectedBlog }) => {
  return (
    <div className="w-full md:w-3/12">
      {/* Reading Time Section */}
      <div className="bg-blue-100 text-blue-700 font-semibold p-2 rounded shadow-md mb-2 flex items-center justify-center gap-2">
        <AiOutlineClockCircle className="text-xl" />
        <span>
          Time Spent Reading: <span className="font-bold">{readingTime}</span>{" "}
          min
        </span>
      </div>

      {/* Bookmarks Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <BsBookmarkFill className="text-blue-500" />
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div className="space-y-2">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark
              key={idx}
              bookmark={bookmark}
              setSelectedBlog={setSelectedBlog}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
