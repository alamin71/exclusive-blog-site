import React from "react";

const Bookmark = ({ bookmark, setSelectedBlog }) => {
  const { title } = bookmark;
  return (
    <>
      <div
        className="bg-slate-200 p-4 m-4 rounded-lg cursor-pointer hover:bg-slate-300"
        onClick={() => setSelectedBlog(bookmark)}
      >
        {title}
      </div>
    </>
  );
};

export default Bookmark;
