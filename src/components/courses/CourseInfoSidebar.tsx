import { Course } from '@/types/Course'
import Typography from '../typography'

const CourseInfoSidebar = ({
    course
}: {
    course: Course
}) => {
  return (
    <div className='shadow p-2 md:p-4 rounded-xl'>
        <div className='flex items-center gap-2 border-b py-3' >
            <Typography as="p">Categories: </Typography>
            <div className='flex flex-wrap '>
                {
                    course.category.map(c => {
                        return <Typography as="p" className='font-bold'>{c}</Typography>
                    })
                }
            </div>
        </div>
        <div className='flex items-center gap-2 border-b py-3' >
            <Typography as="p">Lessons: </Typography>
            <div className='flex flex-wrap '>
            <Typography as="p" className='font-bold'>{course.lessons}</Typography>
            </div>
        </div>
        <div className='flex items-center gap-2 border-b py-3' >
            <Typography as="p">Duration: </Typography>
            <div className='flex flex-wrap '>
            <Typography as="p" className='font-bold'>{course.courseDuration}</Typography>
            </div>
        </div>
    </div>
  )
}

export default CourseInfoSidebar