import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <>

        <li
          className="text-sm
          sm:text-base font-semibold bg-red-100 my-2 p-3 pl-4 border-l-4 border-rose-400 list-decimal rounded-r-3xl"
        >
          {title}
        </li>
    
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
