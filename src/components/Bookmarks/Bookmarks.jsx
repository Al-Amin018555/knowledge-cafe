import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ml-6 mt-4 bg-[rgba(17,17,17,0.05)] p-5">
            <h2 className="font-bold text-2xl">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;