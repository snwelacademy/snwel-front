import PageHeader from '@/components/shared/PageHeader';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { getCurrencySymbol } from '@/lib/utils';
import { getCourse } from '@/services/course-service';
import { Course } from '@/types/Course';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Container } from 'lucide-react';
import CourseInfoSidebar from '@/components/courses/CourseInfoSidebar';
import CourseCurriculum from '@/components/courses/CourseCurriculum';
import CourseDescription from '@/components/courses/CourseDescription';
import EnrollCourseModal from '@/components/courses/EnrollCourseModal';


const SingleCoursePage = () => {
    const [course, setCourse] = useState<Course>();


    const { courseId } = useParams();


    useEffect(() => {
        if (courseId) {
            const course = getCourse(courseId);
            if (!course) return setCourse(undefined);
            return setCourse(course);
        }
    }, [courseId])

    if (!course) {
        return <PageHeader title='No Course Found!' />
    }

    return (
        <>
            <PageHeader title={course?.title} />

            <section className='py-20 px-4 '>
                <div className='container mx-auto px-0 '>
                    <div className='aspect-video bg-primary bg-center bg-cover relative rounded-2xl shadow-md' style={{ backgroundImage: `url(${course.image})` }}>
                    </div>
                    <div className='relative md:-translate-y-1/2 px-2 md:px-5 lg:px-10'>
                        <div className='rounded-xl bg-background p-2 md:p-5 lg:p-5 md:shadow-xl'>
                            <Typography as="h1">{course.title}</Typography>

                            <div className='flex items-start flex-col gap-3 md:flex-row md:items-center mt-3'>
                                <div className='flex-auto flex gap-3 flex-col md:flex-row md:flex-wrap'>
                                    <div className='space-y-1'>
                                        <Typography as="p" className='font-bold underline'>Curriculum</Typography>
                                        <Typography as="p" className=''>{course.curriculum.length} Items</Typography>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center gap-2'>
                                    <span className='p-2 rounded-md bg-primary text-primary-foreground'>{getCurrencySymbol(course.currency)} {course.price}</span>
                                    <EnrollCourseModal trigger={<Button>Enroll Now</Button>} courseId={course.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-20'>
                <div className='container mx-auto flex gap-10 px-4 flex-col lg:flex-row relative'>
                    <Tabs defaultValue="account" className="w-full"  value='curriculum'>
                        <TabsList className='w-full justify-start' >
                            <TabsTrigger value="curriculum" defaultChecked><Book className='w-4 h-4 mr-2' /> <span>Curriculum</span></TabsTrigger>
                            <TabsTrigger value="about"><Container className='w-4 h-4 mr-2' /> <span>About</span></TabsTrigger>
                        </TabsList>
                        <div className='mt-10'>
                            <TabsContent defaultChecked value="curriculum"><CourseCurriculum curriculum={course.curriculum} /></TabsContent>
                            <TabsContent value="about"><CourseDescription desc={course.description}/></TabsContent>
                        </div>
                    </Tabs>

                    <div className='max-w-xs w-full'>
                        <Typography as="h2" className='mb-3' >Course Info</Typography>
                        <CourseInfoSidebar course={course} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default SingleCoursePage