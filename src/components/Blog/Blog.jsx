import { PiBookmarkSimpleBold } from "react-icons/pi";
import "./Blog.css"

const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className="rounded-lg mt-4 w-full" src={cover} alt="" />
            <div className="mt-6 flex justify-between mb-4">
                <div className="flex">
                    <img src={author_img} alt={`cover image of title ${title}`}></img>
                    <div className="ml-6">
                        <h4 className="text-2xl font-bold text-[#111111]">{author}</h4>
                        <p className="font-semibold text-[rgba(17,17,17,0.6)]">{posted_date}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <p className="font-medium text-[20px] text-[rgba(17,17,17,0.6)]">{reading_time} min read </p>
                    <button onClick={() => handleAddToBookMarks(blog)} className="cursor text-2xl text-red-400">
                        <PiBookmarkSimpleBold></PiBookmarkSimpleBold>
                    </button>

                </div>
            </div>
            <h2 className="mb-2 font-bold text-[40px]">{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx} className="mr-3 font-medium text-[20px] text-[rgba(17,17,17,0.6)]">{hash}</span>)
            }
            <br />
            <button onClick={() => handleMarkAsRead(reading_time)} className="mt-2 text-[#6047EC] font-semibold text-[20px] cursor-pointer underline">Mark as read</button>

        </div>
    );
};

export default Blog;