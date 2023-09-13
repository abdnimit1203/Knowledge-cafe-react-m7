import PropTypes from "prop-types";
import Bookmark from "./../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <>
      <div className="sm:ml-4">
        <div className="border-2 border-purple-800 bg-purple-100 rounded-xl mb-6">
          <h2 className="text-purple-800 font-bold  p-2 text-xs sm:text-base">
            Spent time on read : {readTime} min
          </h2>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-xs sm:text-lg">
            Bookmarked Blogs : {bookmarks.length}
          </h3>
          {
          bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>
          ))
          }
        </div>
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number,
};
export default Bookmarks;
