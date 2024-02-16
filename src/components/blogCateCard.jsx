import React from 'react'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath'

const BlogCateCard = ({data}) => {
    return (
        <>
            <div className="col-sm-5 div6">
                <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-1">
                    {data?.cate_name}
                </span>
                <img
                    src={`${window.location.origin}/${data?.image}`}
                    className="img6" alt='img2' />
                <p className="Travel"># Travel# Lifestyle</p>
                <h3 className="text_contant">
                    {data?.title}
                </h3>
                <span className="date text-secondary">{data?.date}</span>
                <span className="read_more">
                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data?.slug}`} className='btn btn-outline-info'>read more</Link>
                </span>
            </div>
        </>
    )
}

export default BlogCateCard