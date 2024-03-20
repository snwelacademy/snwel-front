
const CourseDescription = ({
    desc
}: {
    desc?: string
}) => {
  return (
    <div>
        {
            desc ? desc : "No Description"
        }
    </div>
  )
}

export default CourseDescription