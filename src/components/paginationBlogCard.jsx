import React from 'react'
import { Route_Path } from '../RoutePath/routepath'
import { Link } from 'react-router-dom'

const PaginationBlogCard = ({ data }) => {
    return (
        <>
            <div className="col-sm-6 col-md-4 p-2">
                <div className='div4'>
                    <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-2">
                        {data?.cate_name}
                    </span>
                    <img
                        src={`${window.location.origin}/${data?.image}`}
                        className="img1"
                        alt='img1'
                    />
                    {/* <p className="Travel">{data?.cate_name}</p> */}
                    <h3 className="p-1">
                        {data?.title}
                    </h3>
                    <div className='d-flex justify-content-between mt-2 p-1 mt-4 end' >
                        <p className="">{data?.date}</p>
                        <p className="">
                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data?.slug}`} className='btn btn-outline-danger'>read more</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginationBlogCard