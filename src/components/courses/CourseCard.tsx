import { Course } from '@/types/Course'
import { Card } from '../ui/card';
import { PersonIcon, ClockIcon } from '@radix-ui/react-icons'
import { BookTextIcon } from 'lucide-react';
import Typography from '../typography';
import { getCurrencySymbol } from '@/lib/utils';

type CourseCardProps = {
    course: Course
}

const CourseCard = ({
    course: {
        title,
        // description,
        shortDescription,
        image,
        enrolled,
        courseDuration,
        currency,
        price
    }
}: CourseCardProps) => {


  return (
    <div className='bg-white'>
      <Card className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative pb-12 bg-primary/10">
      <div className='aspect-video bg-center bg-cover bg-no-repeat relative' style={{ backgroundImage: `url(${image})` }}>
        {/* <img className="w-full" src={image} alt={title} /> */}
        <div className='absolute bottom-0 px-3 py-2 flex items-center gap-3'>
            <Typography as="label" className='inline-block bg-orange-500 text-white p-1 rounded '>
            {getCurrencySymbol(currency)}{price}
            </Typography>
            {/* <span className='inline-block bg-orange-500 text-white p-1 rounded-full'>
                {getCurrencySymbol(currency)}{price}
            </span> */}
        </div>
      </div>
      <div className="px-6 py-4">
        <Typography as="h4" className='line-clamp-1'>{title}</Typography>
        <Typography as="subtitle" className='text-gray-500 text-base'>{shortDescription}</Typography>
      </div>
      <div className=" py-2 absolute bottom-0 left-0 w-full flex items-center justify-between border-t border-t-muted-foreground">
        <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <PersonIcon className='inline-block mr-1 text-primary'/><span>{enrolled}</span>
        </span>
        <span className="inline-flex items-center justify-center  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <ClockIcon className='inline-block mr-1 text-primary'/><span>{courseDuration}h</span>
        </span>
        <span className="inline-block l px-3 py-1 text-sm font-semibold text-gray-700">
        <BookTextIcon className='inline-block mr-1 text-primary w-4'/><span>Lecture</span>
        </span>
      </div>
    </Card>
    </div>
  )
}

export default CourseCard