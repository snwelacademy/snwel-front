/* eslint-disable @typescript-eslint/no-unused-vars */
import CourseCard from '@/components/courses/CourseCard'
import CourseFilter, { CourseFilterData } from '@/components/courses/CourseFilter'
import PageHeader from '@/components/shared/PageHeader'
import { getAllCourses, getCourseByCategory } from '@/services/course-service'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CourseListPage = () => {
    const [courses, setCourses] = useState(getAllCourses());
    const [courseFilter, setFilter] = useState<CourseFilterData>();
    const loc = useLocation()

    useEffect(() => {
        const category = new URLSearchParams(location.search).get('category');
        console.log({category})
        if (category) {
            setFilter({ category });
            setCourses(_crs => getCourseByCategory(category))
        }
    }, [loc])


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
                            courses.map(cs => {
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