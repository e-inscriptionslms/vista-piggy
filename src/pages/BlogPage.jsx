import React, { useState } from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import { useParams } from 'react-router-dom'
import { bolgdata } from '../data/bolgdata'
import { Base_Url } from '../helper/helper'
import Recomondation from '../components/Recomondation'

const BlogPage = () => {
  const { slug } = useParams()
  const [blog_data, setBlogData] = useState(null)
  const [bolg_data, setBlog_Data] = useState(JSON.parse(bolgdata))

  useState(() => {
    let Obj = JSON.parse(bolgdata)?.find((item) => item.slug === slug)
    setBlogData(Obj)
  }, [blog_data])
  return (
    <>
      <BreadcrumbSection data={blog_data} cate={blog_data && blog_data?.cate_name} />
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
                {blog_data && blog_data?.discritions?.map((item, index) => (
                  <div key={index}>
                    <h3 className='text-danger'>{index + 1} .{item.title}</h3>
                    <img className='blog_img' src={Base_Url() + item.image} alt="img1" width="100%" />
                    {item?.contents?.map((item, index) => (
                      <p className='mt-3' key={index}>{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className='row mt-3'>
              <h4 className='categorys text-white'>You May Also Like</h4>
              { bolg_data && bolg_data?.splice(1,3)?.map((item,index)=>(
                <Recomondation item={item} key={index} />
              ))}

            </div>

          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </>
  )
}

export default BlogPage