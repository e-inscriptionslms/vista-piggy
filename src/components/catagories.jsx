import React, { useState } from 'react'
import { bolgdata } from '../data/bolgdata'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath'
import { Base_Url } from '../helper/helper'

const Catagories = ({ item }) => {
    const [data , setData] = useState(JSON.parse(bolgdata)?.filter((ele) => ele.cate_name.toLowerCase() === item)) 

    return (
        <>
            <div className="col-sm-12 p-1">
                <div className="categorys">
                    <h2>{item}</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-6 col-md-6">
                        <div className="row">
                            <div className="col-sm-6 p-1" data-aos="fade-right" data-aos-duration={2000}>
                                {data && data.length >= 1 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 1]?.slug?.replaceAll(" ","-")}`}>
                                        <div className='shadow p-3 overflow-hidden' style={{ height: "390px" }}>
                                            <img
                                                src={`${Base_Url()}/${data && data[data.length - 1]?.image}`}
                                                style={{ width: "100%", objectFit: "cover" }}
                                                alt='img2'
                                            />
                                            <p className="category_contantimg">{item}</p>
                                            <h5 className='h3hover mt-0 ellipsis'>{data && data[data.length - 1]?.title}</h5>
                                            <p className='mt-3 ellipsis'>{data && data[data.length - 1]?.base_title}</p>
                                            <p className='bottom-end mt-1 p-1'>Editorial Staff {data && data[data.length - 1]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                            <div
                                className="col-sm-6  p-1"
                                data-aos="fade-right"
                                data-aos-duration={2000}
                            >
                                {data && data.length >= 2 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 2]?.slug}`}>
                                        <div className='shadow p-3 overflow-hidden' style={{ height: "390px" }}>
                                            <img
                                                src={`${Base_Url()}/${data && data[data.length - 2]?.image}`}
                                                style={{ width: "100%", objectFit: "cover" }}
                                                alt='img2'
                                            />
                                            <p className="category_contantimg">{item}</p>
                                            <h5 className='h3hover ellipsis'>{data && data[data.length - 2]?.title}</h5>
                                            <p className='mt-3 ellipsis'>{data && data[data.length - 2]?.base_title}</p>
                                            <p className='bottom-end'>Editorial Staff {data && data[data.length - 2]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                            <div
                                className="col-lg-4 col-md-4 col-sm-6 p-1"
                                data-aos="flip-up"
                                data-aos-duration={2000}
                            >
                                {data && data.length >= 3 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 3]?.slug}`}>
                                        <div className='shadow p-3 overflow-hidden' style={{ height: "400px" }}>
                                            <img
                                                src={`${Base_Url()}/${data && data[data.length - 3]?.image}`}
                                                style={{ width: "100%", objectFit: "cover" }}
                                                alt='img2'
                                            />
                                            <p className="category_contantimg">{item}</p>
                                            <h5 className='h3hover ellipsis'>{data && data[data.length - 3]?.title}</h5>
                                            <p className='mt-4 ellipsis'>{data && data[data.length - 3]?.base_title}</p>
                                            <p className='bottom-end'>Editorial Staff {data && data[data.length - 3]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                            <div
                                className="col-lg-4 col-md-4 col-sm-6 p-1"
                                data-aos="flip-up"
                                data-aos-duration={2000}
                            >
                                {data && data.length >= 4 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 4]?.slug}`}>
                                        <div className='shadow p-3 overflow-hidden' style={{ height: "400px" }}>
                                            <img
                                                src={`${Base_Url()}/${data && data[data.length - 4]?.image}`}
                                                style={{ width: "100%", objectFit: "cover" }}
                                                alt='img2'
                                            />
                                            <p className="category_contantimg">{item}</p>
                                            <h5 className='h3hover ellipsis'>{data && data[data.length - 4]?.title}</h5>
                                            <p className='mt-4 ellipsis'>{data && data[data.length - 4]?.base_title}</p>
                                            <p className='bottom-end'>Editorial Staff {data && data[data.length - 4]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                            <div
                                className="col-sm-6 col-md-4 col-lg-4 p-1"
                                data-aos="flip-up"
                                data-aos-duration={2000}
                            >
                                {data && data.length >= 5 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 5]?.slug}`}>
                                        <div className='shadow p-3 overflow-hidden' style={{ height: "400px" }}>
                                            <img
                                                src={`${Base_Url()}/${data && data[data.length - 5]?.image}`}
                                                style={{ width: "100%", objectFit: "cover" }}
                                                alt='img2'
                                            />
                                            <p className="category_contantimg">{item}</p>
                                            <h5 className='h3hover ellipsis'>{data && data[data.length - 5]?.title}</h5>
                                            <p className='mt-4 ellipsis'>{data && data[data.length - 5]?.base_title}</p>
                                            <p className='bottom-end p-1'>Editorial Staff {data && data[data.length - 5]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-6" data-aos="flip-top" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                        {data && data.length >= 3 ?
                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 3]?.slug}`}>
                                <div className='shadow'>
                                    <img
                                        src={`${Base_Url()}/${data && data[data.length - 3]?.image}`}
                                        style={{ width: "100%", height: "640px" }}
                                        alt='img2'
                                    />
                                    <h5 className='h3hover p-2 ellipsis'>{data && data[data.length - 3]?.title}</h5>
                                    <p className='mt-1 p-1 ellipsis1'>{data && data[data.length - 3]?.base_title}</p>
                                    <p className='mb-0 p-2'>Editorial Staff {data && data[data.length - 3]?.date}</p>
                                </div>
                            </Link> : ""}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catagories