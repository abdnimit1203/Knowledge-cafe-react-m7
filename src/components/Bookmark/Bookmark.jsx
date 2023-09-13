import PropTypes from "prop-types";

const Bookmark = ({ bookmark ,handleReadTime}) => {
  const { id ,title,reading_time } = bookmark;
  return (
    <>

        <li
          className="text-sm
          sm:text-base font-semibold bg-red-100 my-2 p-3 pl-4 border-l-4 border-rose-400 list-decimal rounded-r-3xl"
        >
          {title}
          <span className="block font-semibold underline text-xs text-red-600 mt-2"><button onClick={() => handleReadTime(id,reading_time)} className="underline " title="removes from list">Mark as read</button></span>
        </li>
    
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  handleReadTime: PropTypes.func
};
export default Bookmark;
