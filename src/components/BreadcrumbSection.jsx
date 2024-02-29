import React from 'react'
import { Link } from 'react-router-dom'
import { Base_Url } from '../helper/helper'

const BreadcrumbSection = ({data,cate}) => {
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section">
                <div className="breadcrumb-option" style={{background:`url('${Base_Url()}/${data?.image}')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__text">
                                    <h2 className='text-danger'>Category</h2>
                                    <div className="breadcrumb__links">
                                        <Link to="/" className='text-danger'>Home</Link>
                                        <span className='text-danger'>{cate}</span>
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