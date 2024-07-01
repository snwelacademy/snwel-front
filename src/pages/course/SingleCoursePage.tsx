/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from '@/components/shared/PageHeader';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { formatToLocalCurrency } from '@/lib/utils';
import { useParams, useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Container } from 'lucide-react';
import CourseInfoSidebar from '@/components/courses/CourseInfoSidebar';
import CourseCurriculum from '@/components/courses/CourseCurriculum';
import CourseDescription from '@/components/courses/CourseDescription';
import EnrollCourseModal from '@/components/courses/EnrollCourseModal';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from '@/services/admin/admin-course-service';
import PageLoader from '@/components/PageLoader';


const SingleCoursePage = () => {
    const { slug } = useParams();
    const [searchParams] = useSearchParams()
    const { data: course, isLoading } = useQuery({
        queryKey: ["course", slug],
        queryFn: () => getCourse(slug || "")
    })
    if (isLoading) {
        return <PageLoader />
    }
    if (!course) {
        return <PageHeader title='No Course Found!' />
    }



    return (
        <>
            {/* <PageHeader title={course?.title} image={course.image} /> */}

            <section className='py-20 px-4 z-50'>
                <div className='container mx-auto px-0 flex flex-col md:flex-row gap-5 relative'>
                    <div className='flex-grow relative'>
                        <div className='aspect-video bg-primary bg-center bg-cover relative rounded-2xl shadow-md' style={{ backgroundImage: `url(${course.image})` }}>
                        </div>
                        <div className='px-2 md:px-5 lg:px-10'>
                            <div className='rounded-xl bg-background p-2 md:p-5 lg:p-5 md:shadow-xl -translate-y-1/2'>
                                <div className='flex items-center'>
                                    <Typography className='flex-grow' as="h1">{course.title}</Typography>
                                    <span> <img className='w-10' src={"/assets/images/284-2840858_100-job-guarantee-logo-hd-png-download.png"} /></span>
                                </div>

                                <div className='flex items-start flex-col gap-3 md:flex-row md:items-center mt-3'>
                                    <div className='flex-auto flex gap-3 flex-col md:flex-row md:flex-wrap'>
                                        <div className='space-y-1'>
                                            <Typography as="p" className='font-bold underline'>Curriculum</Typography>
                                            <Typography as="p" className=''>{course.curriculum.length} Items</Typography>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center gap-2'>
                                        <span className='p-2 rounded-md text-primary text-2xl md:text-2xl font-mono font-bold text-orange-500'>{formatToLocalCurrency(course.price)}</span>
                                        <EnrollCourseModal trigger={<Button>Enroll Now</Button>} courseId={course._id} />
                                    </div>
                                </div>
                            </div>

                            <Tabs defaultValue={searchParams.get('tab') || 'curriculum'} className="w-full" >
                                <TabsList className='w-full justify-start' >
                                    <TabsTrigger value="curriculum" defaultChecked><Book className='w-4 h-4 mr-2' /> <span>Curriculum</span></TabsTrigger>
                                    <TabsTrigger value="about"><Container className='w-4 h-4 mr-2' /> <span>About</span></TabsTrigger>
                                </TabsList>
                                <div className='mt-10'>
                                    <TabsContent value="curriculum"><CourseCurriculum curriculum={course.curriculum} /></TabsContent>
                                    <TabsContent value="about"><CourseDescription desc={course.text} /></TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                    <div className='max-w-sm w-full sticky top-[100px] h-full'>
                        <Typography as="h2" className='mb-3'>Course Info</Typography>
                        <CourseInfoSidebar course={course} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleCoursePage