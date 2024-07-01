/* eslint-disable @typescript-eslint/no-unused-vars */
import JobVacancyListCard from '@/components/job-vacancy/JobVacancyListCard'
import PageHeader from '@/components/shared/PageHeader'
import { getListOptionsFromSearchParams } from '@/lib/utils'
import { getAllJobVacancies } from '@/services/guestJobVacancyService'
import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { useSearchParams } from 'react-router-dom'

const JobVacancyListPage = () => {
    const [searchParams] = useSearchParams()
    const {data} = useQuery({
        queryKey: ['/admin/course', ],
        queryFn: () => {
            
            return getAllJobVacancies(getListOptionsFromSearchParams(searchParams))
        }
      })
      

    return (
        <>
            <PageHeader title="Job Vacancies" />

            <section className='py-20 px-4'>
                <div className="container mx-auto px-4">
                    <div className='grid grid-cols-1 gap-[30px] mt-10'>
                        {
                            data?.docs.map(job => {
                                return <div className='w-full' key={nanoid()}><JobVacancyListCard data={job} /></div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobVacancyListPage