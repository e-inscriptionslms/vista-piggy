import React from 'react'

const PaginationBlogCard = () => {
    return (
        <>
            <div className="col-sm-6 col-md-4 p-2">
                <div className='div4'>
                <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-1">
                    Technolgy
                </span>
                <img
                    src="./assets/Arawn-Celtic-God-Of-Life-And-Death-1-280x210.webp"
                    className="img6"
                />
                <p className="Travel"># Travel# Lifestyle</p>
                <h3 className="text_contant">
                    Are You Ready To Go Home After The Sunset View?
                </h3>
                <span className="date">25 April 2023 </span>
                <span className="read_more me-3">
                    <a href="" className='btn btn-outline-secondary'>read more</a>
                </span>
                </div>
            </div>
        </>
    )
}

export default PaginationBlogCard