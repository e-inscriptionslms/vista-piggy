import React from 'react'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath'

const BlogCateCard = ({ data }) => {
    return (
        <>
            <div className="col-6 div6">
                <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-1">
                    {data?.cate_name}
                </span>
                <img
                    src={`${window.location.origin}/${data?.image}`}
                    className="img6" alt='img2' />
                <p className="Travel">{data?.cate_name}</p>
                <h3 className="text_contant">
                    {data?.title}
                </h3>
                <div className='d-flex justify-content-between mt-4 p-2'>
                <p className=" text-secondary">{data?.date}</p>
                <p className="right">
                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data?.slug}`} className='btn btn-outline-danger'>read more</Link>                
                </p>
                </div>
            </div>
        </>
    )
}

export default BlogCateCard