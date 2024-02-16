import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'

const BlogPage = () => {
    return (
        <>
        <BreadcrumbSection/>
            <div className="container mt-4 p-5">
               <div className='row'>
                <div className='col-9 p-3'>
                  <div className='border bg-light p-4'>
                    <span className='text-danger'>home </span><span>{`> technology`}</span>
                    <h2 className='mt-3'>Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <div className='mt-4'>
                    <span><i class="fa-regular fa-user"></i> VISTA PIGGY </span><span><i class="fa-regular fa-clock"></i> November 24, 2023 </span><span><i class="fa-regular fa-comment"></i> 0 comment</span>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className='col-3'></div>
               </div>
            </div>

        </>
    )
}

export default BlogPage