
const Blog = ({ blog }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className="mt-6 flex justify-between">
                <div className="flex">
                    <img src={author_img} alt={`cover image of title ${title}`}></img>
                    <div className="ml-6">
                        <h4 className="text-2xl font-bold text-[#111111]">{author}</h4>
                        <p className="font-semibold text-[rgba(17,17,17,0.6)]">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className="font-medium text-[20px] text-[rgba(17,17,17,0.6)]">{reading_time} min read</p>
                </div>
            </div>
            <h2 className="font-bold text-[40px]">{title}</h2>
            {
                hashtags.map((hash,idx) => <span key={idx} className="mr-3 font-medium text-[20px] text-[rgba(17,17,17,0.6)]">{hash}</span>)
            }
        </div>
    );
};

export default Blog;