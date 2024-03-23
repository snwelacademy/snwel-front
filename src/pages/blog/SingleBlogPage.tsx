import SingleBlog from "@/components/blog/SingleBlog";
// import PageHeader from "@/components/shared/PageHeader";
// import { constants } from "@/config/constants";
import { getBlogBySlug } from "@/services/blog-service";
import { useParams } from "react-router-dom"

const SingleBlogPage = () => {
    const { slug } = useParams();
    const blog = slug ? getBlogBySlug(slug) : undefined;
    if (!slug || !blog) return <div className="flex items-center">Not Found!</div>
    return (
        <>
            {/* <PageHeader title={blog.title} image={constants.imagePath + '/blog-image.jpg'} /> */}
            <section className="py-10 md:py-36">
                <div className="container mx-auto"><SingleBlog blog={blog} /></div>
                
            </section>
        </>
    )
}

export default SingleBlogPage