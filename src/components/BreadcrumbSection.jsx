import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbSection = ({cate}) => {
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section">
                <div className="breadcrumb-option blog set-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__text">
                                    <h2>Category</h2>
                                    <div className="breadcrumb__links">
                                        <Link to="/">Home</Link>
                                        <span>{cate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
        </>

    )
}

export default BreadcrumbSection