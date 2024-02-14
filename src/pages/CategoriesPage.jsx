import BreadcrumbSection from "../components/BreadcrumbSection";
import BlogCateCard from "../components/blogCateCard";
import PaginationBlogCard from "../components/paginationBlogCard";

export default function CategoriesPage() {
    return (
        <>
            <BreadcrumbSection />
            <div className="container mt-4">
                <div className="row d-flex justify-content-between">
                    <BlogCateCard />
                    <BlogCateCard />
                </div>
            </div>
            <div className="container mb-5">
                <div className="row">
                    { }<PaginationBlogCard />
                    <PaginationBlogCard />
                    <PaginationBlogCard />
                    <PaginationBlogCard />
                    <PaginationBlogCard />
                    <PaginationBlogCard />
                </div>
            </div>
        </>
    )
}
