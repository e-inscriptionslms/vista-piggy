import React, { useState } from 'react'
import { Route_Path } from '../RoutePath/routepath'
import { Link } from 'react-router-dom'


const Recomondation = ({ item }) => {
    // const [data,setData] = useState(JSON.parse(bolgdata))
    return (
        <>
            <div className="col-sm-12 col-md-4 p-1">
                <div className='div5'>

                    <img
                        src={`${window.location.origin}/${item.image}`}
                        className="img1"
                        alt='img1'
                    />
                    <span className="mt-3 ms-1 mb-1 text-danger rounded-2 text-uppercase">
                        {item?.cate_name}
                    </span>
                    {/* <p className="Travel">{item.cate_name}</p> */}
                    <div className='p-1 mb-1'>
                        <h6 className="p-1 ellipsis2">
                            {item.title}
                        </h6>
                        <div className='d-flex justify-content-between p-1 mt-5' >
                            <p className="mb-0">{item.date}</p>
                            <p className="mb-0">
                                <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${item.slug}`} className='btn btn-outline-danger'>read more</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recomondation