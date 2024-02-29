import React, { useState } from 'react'
import { bolgdata } from '../data/bolgdata'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath'
import { Base_Url } from '../helper/helper'

const Catagories = ({ item }) => {
    let data = JSON.parse(bolgdata)?.filter((ele) => ele.cate_name === item)
    return (
        <>
            <div className="container-fluid p-4">
                <div className="row mt-2 border p-3">
                    <div className="col-sm-9 p-1">
                        <div className="categorys">
                            <h2>{item}</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-sm-6 p-1" data-aos="fade-right" data-aos-duration={2000}>
                                        {data && data?.length >= 1 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 1]?.slug}`}>
                                                <div className='shadow p-3' style={{height:"390px"}}>
                                                    <img
                                                        src={`${Base_Url()}/${data && data[data.length - 1]?.image}`}
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h5 className='h3hover mt-0'>{data && data[data.length - 1]?.title}</h5>
                                                    <p className='bottom-end'>Editorial Staff {data && data[data.length - 1]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-sm-6  p-1"
                                        data-aos="fade-left"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 2 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 2]?.slug}`}>
                                                <div className='shadow p-3' style={{height:"390px"}}>
                                                    <img
                                                        src={`${Base_Url()}/${data && data[data.length - 2]?.image}`}
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h5 className='h3hover'>{data && data[data.length - 2]?.title}</h5>
                                                    <p className='bottom-end'>Editorial Staff {data && data[data.length - 2]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 3 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 3]?.slug}`}>
                                                <div className='shadow p-3' style={{height:"400px"}}>
                                                    <img
                                                        src={`${Base_Url()}/${data && data[data.length - 3]?.image}`}
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h5 className='h3hover'>{data && data[data.length - 3]?.title}</h5>
                                                    <p className='bottom-end'>Editorial Staff {data && data[data.length - 3]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 4 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 4]?.slug}`}>
                                                <div className='shadow p-3' style={{height:"400px"}}>
                                                    <img
                                                        src={`${Base_Url()}/${data && data[data.length - 4]?.image}`}
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h5 className='h3hover'>{data && data[data.length - 4]?.title}</h5>
                                                    <p className='bottom-end'>Editorial Staff {data && data[data.length - 4]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-4 col-lg-4 p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 5 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 5]?.slug}`}>
                                                <div className='shadow p-3' style={{height:"400px"}}>
                                                    <img
                                                        src={`${Base_Url()}/${data && data[data.length - 5]?.image}`}
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h5 className='h3hover'>{data && data[data.length - 5]?.title}</h5>
                                                    <p className='bottom-end'>{data && data[data.length - 5]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                                {data && data?.length >= 3 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 3]?.slug}`}>
                                        <div className='shadow'>
                                            <img
                                                src={`${Base_Url()}/${data && data[data.length - 3]?.image}`}
                                                style={{ width: "100%", height: "680px" }}
                                                alt='img2'
                                            />
                                            <h5 className='h3hover p-2'>{data && data[data.length - 3]?.title}</h5>
                                            <p className='mb-0'>Editorial Staff {data && data[data.length - 3]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-1">
                        <div className='bg-light p-2'>
                            <h5>Related Post</h5>
                            <ul className='p-0'>
                                {data && data?.map((item,index)=>(
                                    <li className='p-1 mt-1'>
                                    <Link to="">
                                        <div className='d-flex gap-3 justify-content-between align-items-center bg-sec rounded-1 p-1'>
                                            <img src={item?.image} width="70px" height="70px" alt={index} />
                                         <h6 className='p-1'>{index+1}. {item?.title}</h6>
                                        </div>
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catagories