import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='mt-5'>
            <h3 className='p-5 rounded-lg font-semibold text-[18px] bg-white text-[#111111]'>{title}</h3>
        </div>
    );
};

export default Bookmark;