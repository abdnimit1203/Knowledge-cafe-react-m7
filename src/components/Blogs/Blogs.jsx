import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";
import Swal from "sweetalert2";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    if (bookmarks.find((bookmark) => bookmark.id == blog.id)) {
      handleDupBookmarkAlert()
    } else {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
      console.log(bookmarks);
    }
  };
  const handleReadTime = (time) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
  };

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);



  // sweet alert
  const handleDupBookmarkAlert =()=>{

    Swal.fire({
      color: '#dd1818',
      timer: 2000,
      title: 'Already Added',
      text: 'Bookmark you selected is already in the list!',
      icon: 'error',
      confirmButtonText: 'Cool'
    })

}
  return (
    <>
      <div className="flex flex-row-reverse gap-3">
        <div className="w-[40%] ">
          <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
        </div>
        <div className="w-[60%] sm:w-1/2">
          {blogs.map((blog, i) => (
            <Blog
              key={blog.id + i}
              blog={blog}
              handleAddToBookmark={handleAddToBookmark}
              handleReadTime={handleReadTime}
            ></Blog>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
