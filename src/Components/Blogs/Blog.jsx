import React from "react";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blogImpot, handleAddBookmark, handleMarksAsRead }) => {
  const {
    title,
    blog_description,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hastag,
  } = blogImpot;

  return (
    <div className="mb-16">
      {/* Cover Image */}
      <img
        className="w-full mb-7 rounded-lg"
        src={cover}
        alt={`Cover picture of the title: ${title}`}
      />

      {/* Author & Reading Time */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center text-start">
          <img
            className="w-14 h-14 rounded-full"
            src={author_img}
            alt={`Profile picture of ${author}`}
          />
          <div className="ml-4">
            <h1 className="text-xl font-semibold">{author}</h1>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>

        {/* Reading Time & Bookmark Button */}
        <div className="flex items-center gap-2 text-gray-600">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookmark(blogImpot)}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            title="Add to Bookmark"
          >
            <FaRegBookmark className="text-xl text-blue-600" />
          </button>
        </div>
      </div>

      {/* Title & Hashtags */}
      <div className="text-start">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p>{blog_description}</p>
        <p className="text-gray-500 mb-2">
          {hastag.map((hash, idx) => (
            <a
              key={idx}
              href={`https://www.example.com/tags/${hash.replace("#", "")}`}
              className="mr-2 text-blue-500 hover:underline"
            >
              {hash}
            </a>
          ))}
        </p>
        <button
          className="text-blue-700"
          onClick={() => handleMarksAsRead(reading_time)}
        >
          MarksAsRead
        </button>
      </div>
    </div>
  );
};

export default Blog;
