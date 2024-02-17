import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route_Path } from '../RoutePath/routepath';
import { bolgdata } from '../data/bolgdata';
import { Cate_data } from '../helper/helper';
import Catagories from '../components/catagories';

const Home = ({}) => {
    const  [data ,setdata ] = useState(bolgdata) 
    const [cate,setCate] = useState(Cate_data(data))
    console.log(data)

    return (
        <>
            <section id="bredcrum">
                <div className="container-fluid p-4">
                    <div className="row mt-5 border section-theme">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="row justify-content-evenly">
                                <div
                                    className="col-md-6 col-lg-6 col-xl-6 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <Link to={`${Route_Path.BLOG}/${Route_Path.B1}/123`}><div className="p-2 rounded-2 overflow-hidden header_img1 ">
                                        <span className="mt-4 bg-danger text-white rounded-2 p-1">
                                            {data[data.length-1]?.cate_name}
                                        </span>
                                        <div className="mt-7 text-white">
                                            <h5>
                                               {data[data.length-1]?.title}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>{data[data.length-1]?.date}</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-md-6 col-lg-6 col-xl-6 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <div className="p-2 rounded-2 overflow-hidden header_img2">
                                        <span className="mt-4 bg-danger text-white rounded-2 p-1">
                                        {data[data.length-2]?.cate_name}
                                        </span>
                                        <div className="mt-7 text-white">
                                            <h5>
                                            {data[data.length-2]?.title}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>{data[data.length-2]?.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="row justify-content-evenly gap-2">
                                <div
                                    className="col-12 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <div className="bg-light p-3 rounded-2 border overflow-hidden header_img3">
                                        <span className="mt-4 bg-danger text-white rounded-2 p-1">
                                        {data[data.length-3]?.cate_name}
                                        </span>
                                        <div className="mt-6 text-white">
                                            <h5>
                                            {data[data.length-3]?.title}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>{data[data.length-3]?.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <div className="bg-light p-3 rounded-2 border overflow-hidden header_img4">
                                        <span className="mt-4 bg-danger text-white rounded-2 p-1">
                                        {data[data.length-4]?.cate_name}
                                        </span>
                                        <div className="mt-6 text-white">
                                            <h5>
                                            {data[data.length-4]?.title}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>{data[data.length-4]?.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* first  */}
            {cate?.map((item,index)=>(
                <Catagories item={item} key={index}  />
            ))}       
        </>

    )
}

export default Home