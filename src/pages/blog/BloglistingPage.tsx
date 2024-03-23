import BlogListingGrid from '@/components/blog/BlogListingGrid'
import PageHeader from '@/components/shared/PageHeader'
import { constants } from '@/config/constants'
import { getAllBlogs } from '@/services/blog-service'

const BloglistingPage = () => {
    const blogList = getAllBlogs()
  return (
    <>
    <PageHeader title='Blogs' image={constants.imagePath+'/blog-image.jpg'}/>
    <section className='py-36'>
       <div className='container'>
       <BlogListingGrid blogList={blogList} />
       </div>
    </section>
    </>
  )
}

export default BloglistingPage