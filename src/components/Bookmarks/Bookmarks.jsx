import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="md:w-1/3 ml-6 mt-4">
            <div className="bg-[rgba(96,71,236,0.1)] text-center rounded-lg mb-4 p-5">
                <h3 className="text-[#6047EC] font-bold text-2xl">Spent time on read :{readingTime} min</h3>
            </div>
            <div className="bg-[rgba(17,17,17,0.05)] rounded-lg p-5">
                <h2 className="font-bold text-2xl">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>

        </div>
    );
};

export default Bookmarks;