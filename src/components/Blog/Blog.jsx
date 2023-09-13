import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmark, handleReadTime }) => {
  const {
    cover,
    author,
    author_img,
    posted_date,
    title,
    reading_time,
    hashtags,
  } = blog;





  return (
    <div className="sm:p-6 mb-6 border-2 shadow-xl hover:bg-yellow-300 rounded-xl">
      <div>
        <img src={cover} alt="dp" className="rounded-t-xl sm:rounded-xl mb-6"></img>
      </div>
      <div className="sm:flex justify-between items-center space-y-6 sm:space-y-0 my-2 sm:p-4 px-4">
        <div className="flex gap-4 items-center">
          <img
            src={author_img}
            alt="dp"
           
            className="rounded-full w-10 sm:w-16"
          ></img>
          <div>
            <h3 className="font-bold ">{author}</h3>
            <p className="font-semibold  text-sm text-slate-500">
              {posted_date}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="font-semibold  text-xs text-slate-500 ">
            {reading_time > 60
              ? `${Math.floor(reading_time / 60)} hour ${
                  reading_time % 60
                } min read `
              : `${reading_time % 60} min read `}{" "}
          </span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-pink-500 text-xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <h2 className="font-bold text-lg sm:text-3xl py-4">{title}</h2>
        <p className="text-blue-500">
          {hashtags.map((hash, i) => (
            <span key={i}>
              <a href="">#{hash} </a>
            </span>
          ))}
        </p>
        <button
          onClick={() => handleReadTime(reading_time)}
          className="p-1 text-purple-600 underline font-semibold hover:text-slate-100 hover:bg-purple-600 hover:rounded-lg"
        >
          Mark as read
        </button>
       
        
      </div>
    </div>


  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};
export default Blog;
