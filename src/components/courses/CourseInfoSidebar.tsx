import { Course } from '@/types/Course'
import Typography from '../typography'
import { getCurrencySymbol } from '@/lib/utils'
import EnrollCourseModal from './EnrollCourseModal'
import { Button } from '../ui/button'

const CourseInfoSidebar = ({
    course
}: {
    course: Course
}) => {
    return (
        <div className='shadow p-2 md:p-4 rounded-xl sticky top-10'>
            <div className='flex items-center gap-2 border-b py-3' >
                <Typography as="p">Categories: </Typography>
                <div className='flex flex-wrap '>
                    {
                        course.categories.map(c => {
                            return <Typography as="p" className='font-bold'>{c.title}</Typography>
                        })
                    }
                </div>
            </div>
            <div className='flex items-center gap-2 border-b py-3' >
                <Typography as="p">Lessons: </Typography>
                <div className='flex flex-wrap '>
                    <Typography as="p" className='font-bold'>{course.curriculum.length}</Typography>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b py-3' >
                <Typography as="p">Duration: </Typography>
                <div className='flex flex-wrap '>
                    <Typography as="p" className='font-bold'>{course.courseDuration}</Typography>
                </div>
            </div>

            <div className='flex items-center gap-2 border-b py-3' >
                <Typography as="p">Price: </Typography>
                <div className='flex flex-wrap '>
                    <Typography as="p" className='font-bold text-primary'>{getCurrencySymbol(course.currency)}{course.price}</Typography>
                </div>
            </div>

            {
                course.certificate &&
                <div className='flex items-center gap-2 border-b py-3' >
                    <Typography as="p">Certificate: </Typography>
                    <div className='flex flex-wrap '>
                        <img className='w-6' src={"/assets/images/check.png"} />
                    </div>
                </div>
            }

            {
                course.isPremium &&
                <div className='flex items-center gap-2 border-b py-3' >
                    <Typography as="p">Job Guarantee: </Typography>
                    <div className='flex flex-wrap '>
                        <img className='w-6' src={"/assets/images/work.png"} />
                    </div>
                </div>
            }
            <div className='flex items-center gap-2  py-3' >
                <EnrollCourseModal trigger={<Button className='w-full'>Enroll Now</Button>} courseId={course._id} />
            </div>
        </div>
    )
}

export default CourseInfoSidebar