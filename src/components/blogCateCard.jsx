import React from 'react'

const BlogCateCard = () => {
    return (
        <>
            <div className="col-sm-5 div6">
                <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-1">
                    Technolgy
                </span>
                <img
                    src="./assets/Arawn-Celtic-God-Of-Life-And-Death-1-280x210.webp"
                    className="img6" />
                <p className="Travel"># Travel# Lifestyle</p>
                <h3 className="text_contant">
                    Are You Ready To Go Home After The Sunset View?
                </h3>
                <span className="date text-secondary">25 April 2023 </span>
                <span className="read_more">
                    <a href="" className='btn btn-outline-info'>read more</a>
                </span>
            </div>
        </>
    )
}

export default BlogCateCard