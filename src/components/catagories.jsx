import React from 'react'
import { bolgdata } from '../data/bolgdata'

const Catagories = ({item}) => {
   let data =  bolgdata?.filter((ele)=>ele.cate_name === item)
    return (
        <>
            <div className="container-fluid p-4">
                <div className="row mt-2 border p-3">
                    <div className="col-sm-9">
                        <div className="categorys">
                            <h1>{item}</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    {data?.length>=1?<div
                                        className="col-sm-6 shadow p-1"
                                        data-aos="fade-right"
                                        data-aos-duration={2000}
                                    >
                                        <img
                                            src="http://localhost:3000/images/Dawadawa-Parkia-Biglobosa-Weird-Flowers-1-740x400.webp"
                                            style={{ width: "100%", objectFit: "cover" }}
                                        />
                                        <p className="category_contantimg">{item}</p>
                                        <h3>{data[data.length-1]?.title}</h3>
                                        <p>
                                        {data[data.length-1]?.base_title}
                                        </p>
                                        <p>Editorial Staff {data[data.length-1]?.date}</p>
                                    </div>:""}
                                   {data?.length>=2?<div
                                        className="col-sm-6 shadow p-1"
                                        data-aos="fade-left"
                                        data-aos-duration={2000}
                                    >
                                        <img
                                            src="http://localhost:3000/images/Dawadawa-Parkia-Biglobosa-Weird-Flowers-1-740x400.webp"
                                            style={{ width: "100%", objectFit: "cover" }}
                                        />
                                        <p className="category_contantimg">{item}</p>
                                        <h3>{data[data.length-2]?.title}</h3>
                                        <p>
                                        {data[data.length-2]?.base_title}
                                        </p>
                                        <p>Editorial Staff {data[data.length-2]?.date}</p>
                                    </div>:""}
                                   {data?.length>=3?<div
                                        className="col-sm-4 shadow p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        <img
                                            src="http://localhost:3000/images/Horse-With-Blue-Eyes-280x210.webp"
                                            style={{ width: "100%", objectFit: "cover" }}
                                        />
                                        <p className="category_contantimg">{item}</p>
                                        <h3>{data[data.length-3]?.title}</h3>
                                        <p>Editorial Staff {data[data.length-3]?.date}</p>
                                    </div>:""}
                                    {data?.length>=4?<div
                                        className="col-sm-4 shadow p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        <img
                                            src="http://localhost:3000/images/Horse-With-Blue-Eyes-280x210.webp"
                                            style={{ width: "100%", objectFit: "cover" }}
                                        />
                                        <p className="category_contantimg">{item}</p>
                                        <h3>{data[data.length-4]?.title}</h3>
                                        <p>Editorial Staff {data[data.length-4]?.base_title}</p>
                                    </div>:""}
                                    {data?.length>=5?<div
                                        className="col-sm-4 shadow p-1"
                                        data-aos="flip-up"
                                        data-aos-duration={2000}
                                    >
                                        <img
                                            src="http://localhost:3000/images/Horse-With-Blue-Eyes-280x210.webp"
                                            style={{ width: "100%", objectFit: "cover" }}
                                        />
                                        <p className="category_contantimg">{item}</p>
                                        <h3>{data[data.length-5]?.title}</h3>
                                        <p>Editorial Staff {data[data.length-5]?.date}</p>
                                    </div>:""}
                                </div>
                            </div>
                            {data?.length>=6?<div
                                className="col-lg-6 shadow p-1"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration={2000}
                            >
                                <img
                                    src="http://localhost:3000/images/Yakumama-Vs-Titanboa-1-740x400.webp"
                                    style={{ width: "100%", height: 680 }}
                                />
                                <h3>{data[data.length-6]?.title}</h3>
                                <p>
                                {data[data.length-6]?.base_title}
                                </p>
                                <p>Editorial Staff {data[data.length-6]?.date}</p>
                            </div>:""}
                        </div>
                    </div>
                    <div className="col-sm-3 bg-primary" style={{ height: "100vh" }}></div>
                </div>
            </div>
        </>
    )
}

export default Catagories