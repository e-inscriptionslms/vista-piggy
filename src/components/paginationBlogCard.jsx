import React from 'react'
import { Route_Path } from '../RoutePath/routepath'
import { Link } from 'react-router-dom'

const PaginationBlogCard = ({ data }) => {
    return (
        <>
            <div className="col-sm-6 col-md-4 p-2">
                <div className='div4'>
                    <span className="mt-4 ms-3 position-absolute bg-danger text-white rounded-2 p-2">
                        {data?.cate_name}
                    </span>
                    <img
                        src={`${window.location.origin}/${data?.image}`}
                        className="img1"
                        alt='img1'
                    />
                    {/* <p className="Travel">{data?.cate_name}</p> */}
                    <h5 className="p-1">
                        {data?.title}
                    </h5>
                    <div className='row align-items-center mt-3 mb-4 p-2'>
                        <div className='col-7'>
                        <p className="mt-2">{data?.date}</p>
                        </div>
                        <div className='col-5 mt-0'>
                        <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data?.slug}`} className='btn btn-outline-danger'>read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginationBlogCard