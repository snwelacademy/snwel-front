import { ReactNode, useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import JoinCourseForm from '../shared/JoinCourseForm'

const EnrollCourseModal = ({
    trigger,
    courseId
}: {
    trigger: ReactNode,
    courseId: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild >{trigger}</DialogTrigger>
        <DialogContent>
            <JoinCourseForm value={{name: '', email: '', courseId, phone: ''}} onClose={() => setOpen(false)} />
        </DialogContent>
    </Dialog>
  )
}

export default EnrollCourseModal