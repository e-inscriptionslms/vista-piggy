import BreadcrumbSection from "../components/BreadcrumbSection";
import BlogCateCard from "../components/blogCateCard";
import PaginationBlogCard from "../components/paginationBlogCard";
import { bolgdata } from "../data/bolgdata";


export default function CategoriesPage() {
   let cate = window.location.pathname.replace('/blog/','')
   console.log(cate);
   let Data = JSON.parse(bolgdata)?.filter((item)=>item.cate_name === cate).reverse()
   console.log(Data);
    return (
        <>
            <BreadcrumbSection />
            <div className="container mt-4">
                <div className="row d-flex justify-content-between">
                    <BlogCateCard data={Data[Data.length-1]} />
                    {Data.length>=2?<BlogCateCard data={Data[Data.length-2]} />:""}
                </div>
            </div>
            <div className="container mb-5">
                <div className="row">
                    {Data?.map((item,index)=>(
                        <PaginationBlogCard data={item} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}
