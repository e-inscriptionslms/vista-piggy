import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath';
import { bolgdata } from '../data/bolgdata';
import { Cate_data } from '../helper/helper';
import Catagories from '../components/catagories';
import HomeCateSection from '../components/homeCateSection';

const Home = () => {
    const [data, setdata] = useState(JSON.parse(bolgdata))
    const [cate, setCate] = useState(null)

    useEffect(() => {
        setCate(Cate_data(data))
    }, [data])

    return (
        <>
            <section id="bredcrum">
                <div className="container-fluid p-4">
                    <div className="row mt-5 border section-theme">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-3">
                            <div className="row justify-content-evenly">
                                <div
                                    className="col-md-7 col-lg-7 col-xl-7 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data?.length - 1].slug}`}>
                                        <div className="rounded-2 overflow-hidden header_img1" >
                                            <span className="mt-4 bg-danger text-white rounded-2 p-1 img-breadcrum">
                                                {data && data[data?.length - 1]?.cate_name}
                                            </span>
                                            <img src={(data && data[data?.length - 1]?.image)} className='w-100 h-100' alt="imh" />

                                            <div className=" fixed-bottom text-white p-1  ">
                                                <h5 className='text-center'>
                                                    {data && data[data?.length - 1]?.title}
                                                </h5>
                                                <div className='text-center text-white p-1'>Editorial Staff
                                                    <span>{data && data[data?.length - 1]?.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-md-5 col-lg-5 col-xl-5 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data?.length - 2].slug}`}>
                                        <div className="rounded-2 overflow-hidden header_img2">
                                            <span className="mt-4 bg-danger text-white rounded-2 p-1 img-breadcrum">
                                                {data && data[data?.length - 2]?.cate_name}
                                            </span>
                                            <img src={(data && data[data?.length - 2]?.image)} className='w-100 h-100' alt="imh" />
                                            <div className="position-absolute fixed-bottom text-white p-1">
                                                <h5 className='text-center' >
                                                    {data && data[data?.length - 2]?.title}
                                                </h5>
                                                <div className='text-center text-white p-1'>Editorial Staff
                                                    <span>{data && data[data?.length - 2]?.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 p-3">
                            <div className="row justify-content-evenly gap-2">
                                <div
                                    className="col-12 p-0"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data?.length - 3].slug}`}>
                                        <div className="bg-light rounded-2 border overflow-hidden header_img3">
                                            <span className="mt-4 bg-danger text-white rounded-2 p-1 img-breadcrum">
                                                {data && data[data?.length - 3]?.cate_name}
                                            </span>
                                            <img src={(data && data[data?.length - 3]?.image)} className='w-100 h-100' alt="imgk" />
                                            <div className="position-absolute fixed-bottom text-white p-1">
                                                <h5 className='text-center'>
                                                    {data && data[data?.length - 3]?.title}
                                                </h5>
                                                <div className='text-center text-white p-1'>Editorial Staff
                                                    <span>{data && data[data?.length - 3]?.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-12 p-0"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data?.length - 4].slug}`}>
                                        <div className="bg-light rounded-2 border overflow-hidden header_img4">
                                            <span className="mt-4 bg-danger text-white rounded-2 p-1 img-breadcrum">
                                                {data && data[data?.length - 4]?.cate_name}
                                            </span>
                                            <img src={(data && data[data?.length - 4]?.image)} className='w-100 h-100' alt="imgh" />
                                            <div className="position-absolute fixed-bottom text-white p-1">
                                                <h5 className='text-center'>
                                                    {data && data[data?.length - 4]?.title}
                                                </h5>
                                                <div className='text-center text-white p-1'>Editorial Staff
                                                    <span>{data && data[data?.length - 4]?.date}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* first  */}

            <div className="container-fluid p-4">
                <div className="row mt-2 border p-3">
                    <div className='col-sm-9 col-md-9 p-1'>
                        {cate?.map((item, index) => (
                            <Catagories item={item} key={index} />
                        ))}
                    </div>
                    <div className="col-sm-12 col-md-3 p-1">
                        <div className='bg-light sticky p-2'>
                            <h5>Related Post</h5>
                            <ul className='p-0'>
                                {data && data?.map((item, index) => (
                                    <li className='p-1 mt-1' key={index}>
                                        <Link to="">
                                            <div className='d-flex gap-3 justify-content-between align-items-center bg-sec rounded-1 p-1'>
                                                <img src={item?.image} width="70px" height="70px" alt={index} />
                                                <h6 className='p-1'>{index + 1}. {item?.title}</h6>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <HomeCateSection cate={cate} data={data}/>
        </>

    )
}

export default Home