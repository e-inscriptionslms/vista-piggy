import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import BlogCateCard from '../components/blogCateCard';
import PaginationBlogCard from '../components/paginationBlogCard';

const MainBlogPage = () => {
    return (
        <>
        <BreadcrumbSection/>
            <div className="container mt-4">
                <div className="row d-flex justify-content-between">
                    <BlogCateCard/>
                    <BlogCateCard/>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                   {}<PaginationBlogCard/>
                </div>
            </div>
        </>

    )
}

export default MainBlogPage;