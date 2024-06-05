
import Typography from '../typography'
import { Book, Clock } from 'lucide-react'

const CourseCurriculum = ({
    curriculum
}: {
    curriculum: {
        title: string,
        duration: string,
        unit?: string
    }[]
}) => {
  return (
    <div className='p-3 md:p-5 lg:p-5 rounded-xl shadow space-y-5'>
        {
            curriculum.map(cc => {
                return <div className='flex md:items-center md:justify-between justify-start flex-col md:flex-row gap-3 py-2 border-b last:border-b-0'>
                    <Typography as="p" className='flex-auto flex items-center gap-2'><Book className='w-4 h-4 text-primary'/><span>{cc.title}</span></Typography>

                    <Typography as="p" className='flex items-center gap-2'><Clock className='w-4 h-4 text-primary'/><span>{cc.duration} {cc.unit || ''}</span></Typography>
                </div>
            })
        }
    </div>
  )
}

export default CourseCurriculum