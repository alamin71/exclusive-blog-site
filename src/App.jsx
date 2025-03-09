import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import BlogList from "./Components/Categories/BlogList";
import Footer from "./Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = (blogImpot) => {
    // Check if blog is already bookmarked
    const isAlreadyBookmarked = bookmarks.some(
      (bookmark) => bookmark.id === blogImpot.id
    );

    if (isAlreadyBookmarked) {
      toast.warning("This blog is already bookmarked!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // If not bookmarked, add to the list
    const newBookmark = [...bookmarks, blogImpot];
    setBookmarks(newBookmark);
    toast.success("Blog added to bookmarks!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleMarksAsRead = (time) => {
    console.log("time add", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <>
      <Header />
      <Navbar />
      <ToastContainer />
      <div className="flex flex-col md:flex-row mt-10 gap-2">
        <div className="w-ful md:w-3/12">
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <BlogList
            selectedCategory={selectedCategory}
            setSelectedBlog={setSelectedBlog}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarksAsRead={handleMarksAsRead}
          selectedBlog={selectedBlog}
        />
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
          setSelectedBlog={setSelectedBlog}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
