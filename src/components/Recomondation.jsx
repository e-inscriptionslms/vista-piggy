import React, { useState } from 'react'
import { Route_Path } from '../RoutePath/routepath'
import { Link } from 'react-router-dom'
import { bolgdata } from '../data/bolgdata'

const Recomondation = () => {
    const [data,setData] = useState(JSON.parse(bolgdata))
    return (
        <>
            <div className="col-sm-12 col-md-4 p-2">
                <div className='div5'>
                    <span className="mt-3 ms-2 position-absolute bg-danger text-white rounded-2 p-2">
                        {data && data[0]?.cate_name}
                    </span>
                    <img
                        src={`${window.location.origin}/${data[2]?.image}`}
                        className="img6"
                        alt='img1'
                    />
                    <p className="Travel">{data[2]?.cate_name}</p>
                    <h6 className="p-1">
                        {data[2]?.title}
                    </h6>
                    <div className='d-flex justify-content-between mt-2 p-1 mt-4' >
                        <p className="">{data[2]?.date}</p>
                        <p className="">
                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data[2]?.slug}`} className='btn btn-outline-danger'>read more</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recomondation