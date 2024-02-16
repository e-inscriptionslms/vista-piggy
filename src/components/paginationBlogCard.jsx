import React from 'react'
import { Route_Path } from '../RoutePath/routepath'
import { Link } from 'react-router-dom'

const PaginationBlogCard = ({data}) => {
    return (
        <>
            <div className="col-sm-6 col-md-4 p-2">
                <div className='div4'>
                <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-1">
                {data?.cate_name}
                </span>
                <img
                    src={`${window.location.origin}/${data?.image}`}
                    className="img6"
                    alt='img1'
                />
                <p className="Travel"># Travel# Lifestyle</p>
                <h3 className="text_contant">
                {data?.title}
                </h3>
                <span className="date">{data?.date}</span>
                <span className="read_more me-3">
                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data?.slug}`} className='btn btn-outline-secondary'>read more</Link>
                </span>
                </div>
            </div>
        </>
    )
}

export default PaginationBlogCard