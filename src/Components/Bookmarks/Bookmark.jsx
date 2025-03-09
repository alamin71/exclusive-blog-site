import React from "react";

const Bookmark = ({ bookmark, setSelectedBlog }) => {
  const { title } = bookmark;

  return (
    <div
      className="bg-slate-100 p-2 m-1 rounded-md shadow-md cursor-pointer hover:bg-slate-200 transition duration-300 ease-in-out transform hover:scale-105"
      onClick={() => setSelectedBlog(bookmark)}
    >
      <span className="font-semibold  text-gray-800">{title}</span>
    </div>
  );
};

export default Bookmark;
