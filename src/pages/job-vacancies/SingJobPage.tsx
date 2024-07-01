import SingleVacancy from '@/components/job-vacancy/SingleVacancy'
import { getJobVacancy } from '@/services/guestJobVacancyService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const SingleJobPage = () => {
    const { slug } = useParams();
    const {data: jobVacancy} = useQuery({
        queryKey: ['/job-vacancy', slug], 
        queryFn: () => getJobVacancy(slug||'')
      })
    if (!slug || !jobVacancy) return <div className="flex items-center"> Job Not Found!</div>
  return (
    <div className='container mx-auto mt-10'>
        <SingleVacancy data={jobVacancy}/>
    </div>
  )
}

export default SingleJobPage