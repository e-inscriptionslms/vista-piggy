import React from 'react'
import Catagories from '../components/catagories'

const Home = () => {
    return (
        <>
            <section id="bredcrum">
                <div className="container-fluid p-4">
                    <div className="row mt-5 border">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="row justify-content-evenly">
                                <div
                                    className="col-md-6 col-lg-6 col-xl-6 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <div className="p-2 rounded-2 overflow-hidden header_img1 ">
                                        <span className="mt-4 bg-danger text-white rounded-2 p-1">
                                            Technolgy
                                        </span>
                                        <div className="mt-7 text-white">
                                            <h5>
                                                Feng Huang: 12 Facts Revealed About The Graceful Chinese
                                                Phoenix{" "}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>December 14, 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-6 col-xl-6 p-1"
                                    data-aos="fade-top"
                                    data-aos-duration={2000}
                                >
                                    <div className="p-2 rounded-2 overflow-hidden header_img2">
                                        <span className="mt-4 bg-danger text-white rounded-2 p-1">
                                            Technolgy
                                        </span>
                                        <div className="mt-7 text-white">
                                            <h5>
                                                Feng Huang: 12 Facts Revealed About The Graceful Chinese
                                                Phoenix{" "}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>December 14, 2023</span>
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
                                            Technolgy
                                        </span>
                                        <div className="mt-6 text-white">
                                            <h5>
                                                Feng Huang: 12 Facts Revealed About The Graceful Chinese
                                                Phoenix{" "}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>December 14, 2023</span>
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
                                            Technolgy
                                        </span>
                                        <div className="mt-6 text-white">
                                            <h5>
                                                Feng Huang: 12 Facts Revealed About The Graceful Chinese
                                                Phoenix{" "}
                                            </h5>
                                            <span>Editorial Staff</span>
                                            <span>December 14, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* first  */}
           {} <Catagories/>
            <Catagories/>
            <Catagories/>
            <Catagories/>
            <Catagories/>
        </>

    )
}

export default Home