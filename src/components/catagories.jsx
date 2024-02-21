import React from 'react'
import { bolgdata } from '../data/bolgdata'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath'

const Catagories = ({ item }) => {
    let data = JSON.parse(bolgdata)?.filter((ele) => ele.cate_name === item)
    return (
        <>
            <div className="container-fluid p-4">
                <div className="row mt-2 border p-3">
                    <div className="col-sm-9 p-1">
                        <div className="categorys">
                            <h1>{item}</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 p-1">
                                <div className="row">
                                    <div
                                        className="col-sm-6 p-1"
                                        data-aos="fade-right"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 1 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 1]?.slug}`}>
                                                <div className='shadow'>
                                                    <img
                                                        src="http://localhost:3000/images/Dawadawa-Parkia-Biglobosa-Weird-Flowers-1-740x400.webp"
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h3 className='h3hover'>{data && data[data.length - 1]?.title}</h3>
                                                    <p >
                                                        {data && data[data.length - 1]?.base_title}
                                                    </p>
                                                    <p>Editorial Staff {data && data[data.length - 1]?.date}</p>
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
                                                <div className='shadow'>
                                                    <img
                                                        src="http://localhost:3000/images/Dawadawa-Parkia-Biglobosa-Weird-Flowers-1-740x400.webp"
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h3>{data && data[data.length - 2]?.title}</h3>
                                                    <p>
                                                        {data && data[data.length - 2]?.base_title}
                                                    </p>
                                                    <p>Editorial Staff {data && data[data.length - 2]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-sm-4 p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 3 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 3]?.slug}`}>
                                                <div className='shadow'>
                                                    <img
                                                        src="http://localhost:3000/images/Horse-With-Blue-Eyes-280x210.webp"
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h3>{data && data[data.length - 3]?.title}</h3>
                                                    <p>Editorial Staff {data && data[data.length - 3]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-sm-4 p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 4 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 4]?.slug}`}>
                                                <div className='shadow'>
                                                    <img
                                                        src="http://localhost:3000/images/Horse-With-Blue-Eyes-280x210.webp"
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h3>{data && data[data.length - 4]?.title}</h3>
                                                    <p>Editorial Staff {data && data[data.length - 4]?.base_title}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                    <div
                                        className="col-sm-4 shadow p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        {data && data?.length >= 5 ?
                                            <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 5]?.slug}`}>
                                                <div className='shadow'>
                                                    <img
                                                        src="http://localhost:3000/images/Horse-With-Blue-Eyes-280x210.webp"
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        alt='img2'
                                                    />
                                                    <p className="category_contantimg">{item}</p>
                                                    <h3>{data && data[data.length - 5]?.title}</h3>
                                                    <p>Editorial Staff {data && data[data.length - 5]?.date}</p>
                                                </div>
                                            </Link> : ""}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-6  p-1"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration={2000}
                            >
                                {data && data?.length >= 6 ?
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/${data && data[data.length - 6]?.slug}`}>
                                        <div className='shadow'>
                                            <img
                                                src="http://localhost:3000/images/Yakumama-Vs-Titanboa-1-740x400.webp"
                                                style={{ width: "100%", height: 680 }}
                                                alt='img2'
                                            />
                                            <h3>{data && data[data.length - 6]?.title}</h3>
                                            <p>
                                                {data && data[data.length - 6]?.base_title}
                                            </p>
                                            <p>Editorial Staff {data && data[data.length - 6]?.date}</p>
                                        </div>
                                    </Link> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-1">
                        <div className='bg-warning h-50'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catagories