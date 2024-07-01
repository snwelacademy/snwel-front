

import Typography from '@/components/typography'
import { Input } from '@/components/ui/input'
import WebinarGridList from '@/components/webinar/WebinarGridList'
import { getListOptionsFromSearchParams } from '@/lib/utils'
import { getAllWebinars } from '@/services/admin/webinar-service'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const WebinarListingPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {data, isLoading} = useQuery({
      queryKey: ['/admin/webinar', searchParams.get('search')], 
      queryFn: () => getAllWebinars(getListOptionsFromSearchParams(searchParams))
    })

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.currentTarget.value;
        if(value){
            setSearchParams({search: value})
        }else{
            setSearchParams({})
        }
    }

    useEffect(() => {
        console.log(searchParams)
    }, [searchParams])
    return (
        <>
            <div className='relative w-full bg-center bg-cover flex flex-col items-center justify-center  min-h-96 bg-primary/10 text-center space-y-3 px-4'>
                <Typography as="heroTitle" className='text-primary z-20 max-w-3xl text-center'>Webinars</Typography>
                <Typography as="p" className='max-w-3xl text-center'>Register now and unlock a world of knowledge designed to elevate your engineering skills and propel your career forward!</Typography>

                <div className='flex items-center justify-center w-full'>
                    <Input className='w-full max-w-sm' placeholder='Search Webinars...' onChange={handleSearch} value={searchParams.get('search')||''} />
                </div>
            </div>
            <section className='py-20'>
                <div className='container'>
                    <WebinarGridList loading={isLoading} webinarList={data?.docs||[]} />
                </div>
            </section>
        </>
    )
}

export default WebinarListingPage