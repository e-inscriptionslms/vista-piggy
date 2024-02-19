import React, { useState } from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import { useParams } from 'react-router-dom'
import { bolgdata } from '../data/bolgdata'
import { Base_Url } from '../helper/helper'

const BlogPage = () => {
    const {slug} = useParams()
    const [blog_data,setBlogData] = useState(null)
console.log(Base_Url()+blog_data?.discritions1['image']);
    useState(()=>{
    let Obj = bolgdata?.find((item)=>item.slug===slug)
    setBlogData(Obj)
    },[blog_data])
    return (
        <>
        <BreadcrumbSection/>
            <div className="container mt-4 p-5">
               <div className='row'>
                <div className='col-9 p-3'>
                  <div className='border bg-light p-4'>
                    <span className='text-danger'>home </span><span>{`> ${blog_data && blog_data?.cate_name}`}</span>
                    <h2 className='mt-3'>{blog_data && blog_data?.title}
                    </h2>
                    <div className='mt-4'>
                    <span><i className="fa-regular fa-user"></i> VISTA PIGGY </span><span><i className="fa-regular fa-clock"></i> November 24, 2023 </span><span><i className="fa-regular fa-comment"></i> 0 comment</span>
                    <p className='mt-4'>{blog_data && blog_data?.base_title}</p>
                    <p className='mt-3'></p>
                    <hr />
                     <h3 className='text-danger'>1. {blog_data && blog_data?.discritions1?.title}</h3>
                     <img className='blog_img' src={Base_Url()+ (blog_data && blog_data?.discritions1['image'])} alt="img1" width="100%" />
                    </div>
                    <p className='mt-3'></p>
                    <p className='mt-3'></p>
                    <p className='mt-3'></p>
                    <p className='mt-3'></p>
                    </div>
                  </div>
                <div className='col-3'></div>
                </div>
               </div>
        </>
    )
}

export default BlogPage