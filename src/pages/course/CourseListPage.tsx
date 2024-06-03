/* eslint-disable @typescript-eslint/no-unused-vars */
import CourseCard from '@/components/courses/CourseCard'
import CourseFilter, { CourseFilterData } from '@/components/courses/CourseFilter'
import PageHeader from '@/components/shared/PageHeader'
import { useListOptions } from '@/hooks/useListOption'
import { getAllCourses } from '@/services/admin/admin-course-service'
import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

const CourseListPage = () => {
    const [courseFilter, setFilter] = useState<CourseFilterData>();
    const [options] = useListOptions()
    const {data} = useQuery({
        queryKey: ['/admin/course', options.filter],
        queryFn: () => {
            console.log("Fetch courses", options);
            return getAllCourses(options)
        },
        enabled: Boolean(options)
      })
    

      useEffect(() => {
        console.log({courseFilter})
      }, [courseFilter])
      

    return (
        <>
            <PageHeader title="Course Listing" />

            <section className='py-20 px-4'>
                <div className="container mx-auto px-4">
                    <div className='p-4 rounded-2xl shadow'>
                        <CourseFilter value={courseFilter} onChange={setFilter} />
                    </div>

                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-items-center mt-10'>
                        {
                            data?.docs.map(cs => {
                                return <div className='w-full' key={nanoid()}><CourseCard course={cs} key={nanoid()} /></div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseListPage