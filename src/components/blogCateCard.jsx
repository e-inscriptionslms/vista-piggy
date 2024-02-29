import React from 'react'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath'

const BlogCateCard = ({ data }) => {
    return (
        <>
            <div className="col-6">
                <div className='div6'>
                <span className="mt-4 ms-3 position-absolute bg-danger text-white rounded-2 p-1">
                    {data?.cate_name}
                </span>
                <img
                    src={`${window.location.origin}/${data?.image}`}
                    className="img1" />
                {/* <p className="category_contantimg">{data?.cate_name}</p> */}
                <h5 className="ellipsis1 p-1 mt-2">
                    {data?.title}
                </h5>
                <p className='mt-3 ellipsis p-1'>{data && data?.base_title}</p>
                <div className='mb-0 d-flex justify-content-between align-items-center p-3'>
                <span className=" text-secondary mt-3">{data?.date}</span>
                <span className="mt-3">
                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data?.slug}`} className='btn btn-outline-danger'>read more</Link>                
                </span>
                </div>
                </div>
            </div>
        </>
    )
}

export default BlogCateCard