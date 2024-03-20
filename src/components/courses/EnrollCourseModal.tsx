import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import JoinCourseForm from '../shared/JoinCourseForm'

const EnrollCourseModal = ({
    trigger,
    courseId
}: {
    trigger: ReactNode,
    courseId: string
}) => {

  return (
    <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
            <JoinCourseForm value={{name: '', email: '', course: courseId}} />
        </DialogContent>
    </Dialog>
  )
}

export default EnrollCourseModal